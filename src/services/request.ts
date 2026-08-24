/**
 * ============================================================================
 * 统一请求封装 - request.ts
 * ============================================================================
 *
 * 【这是什么？】
 * 这是前端与后端通信的"底层通道"。所有 API 请求都通过这个文件发出。
 * 类似 axios.create()，但基于浏览器原生 fetch API 封装。
 *
 * 【为什么需要封装？】
 * 1. 统一 baseURL：所有请求自动加上 /api 前缀，不用每个接口都写
 * 2. 统一错误处理：后端返回 4xx/5xx 时，自动解析错误信息并抛出
 * 3. 统一请求头：自动添加 Content-Type: application/json
 * 4. 类型安全：泛型 <T> 让每个请求的返回值都有明确的 TypeScript 类型
 *
 * 【请求流转过程】
 * 前端调用 httpClient.get('/landscape/photographers')
 *   → 拼接完整 URL: /api/landscape/photographers
 *   → 开发环境：Vite 代理到 http://localhost:3000/api/landscape/photographers
 *   → 生产环境：Nginx 代理到 http://127.0.0.1:3000/api/landscape/photographers
 *   → 后端 Controller 接收请求 → Service 查数据库 → 返回 JSON
 *   → 本文件解析 JSON → 返回类型化的数据
 *
 * 【BASE_URL = '/api' 的含义】
 * - 开发环境：Vite 的 proxy 配置会把 /api 开头的请求转发到后端（见 vite.config.ts）
 * - 生产环境：Nginx 的 proxy_pass 配置会把 /api 开头的请求转发到后端（见 deploy/nginx.conf）
 * - 所以前端代码永远用相对路径 /api/xxx，由代理层决定实际转发到哪里
 *
 * 【httpClient 对象】
 * 封装了 4 个 HTTP 方法，对应后端的 4 种操作：
 * - get → 查询数据（后端 @Get）
 * - post → 创建数据（后端 @Post）
 * - put → 更新数据（后端 @Put）
 * - delete → 删除数据（后端 @Delete）
 * 目前本项目的后端只有 @Get 接口（纯只读），所以主要用 get 方法。
 *
 * 【AbortSignal 支持】
 * fetch 原生支持 AbortSignal，可以通过 options.signal 传入：
 *   httpClient.get('/xxx', { signal: controller.signal })
 * 当路由切换时调用 controller.abort()，可以取消未完成的请求。
 *
 * ============================================================================
 */

const BASE_URL = '/api';

const DEFAULT_TIMEOUT = 15000;

/**
 * 核心请求函数
 *
 * @param path - API 路径（如 '/landscape/photographers'），会自动拼接 BASE_URL
 * @param options - fetch 原生选项（method, headers, body, signal 等）
 * @returns 解析后的 JSON 数据，类型为 T
 *
 * 【错误处理逻辑】
 * - response.ok 为 false（状态码 4xx/5xx）→ 解析后端返回的 errorData.message
 * - 解析失败 → 使用默认错误信息 "请求失败: 404"
 * - 204 No Content → 返回 undefined（如 DELETE 成功后无返回体）
 */
export async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${BASE_URL}${path}`;

  /** 统一请求头：默认 JSON 格式，允许调用方覆盖 */
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), DEFAULT_TIMEOUT);

  const externalSignal = options.signal;
  if (externalSignal) {
    if (externalSignal.aborted) {
      clearTimeout(timeoutId);
      timeoutController.abort();
    } else {
      externalSignal.addEventListener('abort', () => timeoutController.abort());
    }
  }

  let response: Response;
  try {
    response = await fetch(url, {
      ...options,
      headers: defaultHeaders,
      signal: timeoutController.signal,
    });
  } catch (err) {
    clearTimeout(timeoutId);
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new Error(externalSignal?.aborted ? '请求已取消' : '请求超时，请稍后重试');
    }
    throw err;
  }
  clearTimeout(timeoutId);

  /** HTTP 错误处理：4xx/5xx 时尝试解析后端返回的错误信息 */
  if (!response.ok) {
    let message = `请求失败: ${response.status}`;
    try {
      const errorData = await response.json();
      if (errorData.message) {
        message = errorData.message;
      }
    } catch {
      // ignore
    }
    throw new Error(message);
  }

  /** 204 No Content：DELETE 成功等场景，无返回体 */
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

/**
 * httpClient — 封装好的 HTTP 方法集合
 *
 * 用法示例：
 *   import { httpClient } from '@/services/request'
 *   const data = await httpClient.get<GlobalPhotographer[]>('/landscape/photographers')
 *
 * 泛型 <T> 确保返回值有类型提示，类似：
 *   const data: GlobalPhotographer[] = await ...
 */
export const httpClient = {
  get: <T>(path: string, options?: { signal?: AbortSignal }) =>
    request<T>(path, { method: 'GET', signal: options?.signal }),
  post: <T>(path: string, data?: unknown) =>
    request<T>(path, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),
  put: <T>(path: string, data?: unknown) =>
    request<T>(path, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};
