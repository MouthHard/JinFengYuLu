/**
 * 统一的本地存储工具类
 * 支持 localStorage 和 sessionStorage
 * 提供类型安全的 get/set/remove 方法
 * 自动处理序列化/反序列化
 * 统一错误处理
 */

interface StorageOptions {
  prefix?: string;
  storage?: 'local' | 'session';
}

class StorageHelper {
  private prefix: string;
  private storage: Storage;

  constructor(options: StorageOptions = {}) {
    this.prefix = options.prefix || 'app_';
    this.storage = options.storage === 'session' ? sessionStorage : localStorage;
  }

  private getFullKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const fullKey = this.getFullKey(key);
      const raw = this.storage.getItem(fullKey);
      if (raw === null) return defaultValue ?? null;
      return JSON.parse(raw) as T;
    } catch (error) {
      console.error(`[Storage] Failed to get "${key}":`, error);
      return defaultValue ?? null;
    }
  }

  set<T>(key: string, value: T): void {
    try {
      const fullKey = this.getFullKey(key);
      this.storage.setItem(fullKey, JSON.stringify(value));
    } catch (error) {
      console.error(`[Storage] Failed to set "${key}":`, error);
    }
  }

  remove(key: string): void {
    try {
      const fullKey = this.getFullKey(key);
      this.storage.removeItem(fullKey);
    } catch (error) {
      console.error(`[Storage] Failed to remove "${key}":`, error);
    }
  }

  clear(): boolean {
    try {
      if (this.prefix) {
        const keysToRemove: string[] = [];
        for (let i = 0; i < this.storage.length; i++) {
          const storedKey = this.storage.key(i);
          if (storedKey && storedKey.startsWith(this.prefix)) {
            keysToRemove.push(storedKey);
          }
        }
        keysToRemove.forEach((k) => this.storage.removeItem(k));
        return true;
      } else {
        this.storage.clear();
        return true;
      }
    } catch (error) {
      console.error('[Storage] Failed to clear:', error);
      return false;
    }
  }

  has(key: string): boolean {
    try {
      const fullKey = this.getFullKey(key);
      return this.storage.getItem(fullKey) !== null;
    } catch (error) {
      console.error(`[Storage] Failed to check "${key}":`, error);
      return false;
    }
  }

  keys(): string[] {
    try {
      const result: string[] = [];
      for (let i = 0; i < this.storage.length; i++) {
        const storedKey = this.storage.key(i);
        if (storedKey && storedKey.startsWith(this.prefix)) {
          result.push(storedKey.slice(this.prefix.length));
        }
      }
      return result;
    } catch (error) {
      console.error('[Storage] Failed to get keys:', error);
      return [];
    }
  }
}

export const localStore = new StorageHelper({ prefix: '', storage: 'local' });
export const sessionStore = new StorageHelper({ prefix: '', storage: 'session' });
export { StorageHelper };
