/**
 * 任务分片工具
 * 用于将大任务拆分为小任务，避免阻塞主线程
 */

export function chunkedProcess<T>(
  items: T[],
  processFn: (item: T) => void,
  chunkSize = 10,
): Promise<void> {
  return new Promise((resolve) => {
    let index = 0;

    function processChunk() {
      const end = Math.min(index + chunkSize, items.length);
      const startTime = performance.now();

      while (index < end && performance.now() - startTime < 16) {
        processFn(items[index]);
        index++;
      }

      if (index < items.length) {
        requestIdleCallback(processChunk, { timeout: 100 });
      } else {
        resolve();
      }
    }

    requestIdleCallback(processChunk, { timeout: 100 });
  });
}

export function chunkedFilter<T>(
  items: T[],
  filterFn: (item: T) => boolean,
  chunkSize = 20,
): Promise<T[]> {
  return new Promise((resolve) => {
    const result: T[] = [];
    let index = 0;

    function processChunk() {
      const end = Math.min(index + chunkSize, items.length);
      const startTime = performance.now();

      while (index < end && performance.now() - startTime < 16) {
        if (filterFn(items[index])) {
          result.push(items[index]);
        }
        index++;
      }

      if (index < items.length) {
        requestIdleCallback(processChunk, { timeout: 100 });
      } else {
        resolve(result);
      }
    }

    requestIdleCallback(processChunk, { timeout: 100 });
  });
}