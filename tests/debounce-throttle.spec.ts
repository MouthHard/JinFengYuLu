/**
 * debounce 和 throttle 工具函数测试
 * @description 测试防抖和节流函数的核心功能
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { debounce, throttle } from "@/utils/common";

describe("debounce - 防抖函数", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("应该延迟执行函数", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("应该在多次调用时重置计时器", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    vi.advanceTimersByTime(100);

    debouncedFn();
    vi.advanceTimersByTime(100);

    debouncedFn();
    vi.advanceTimersByTime(100);

    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("应该正确传递参数", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn("arg1", "arg2");
    vi.advanceTimersByTime(300);

    expect(mockFn).toHaveBeenCalledWith("arg1", "arg2");
  });
});

describe("throttle - 节流函数", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("应该立即执行第一次调用", () => {
    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 300);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("应该在时间限制内忽略后续调用", () => {
    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 300);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(300);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("应该正确传递参数", () => {
    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 300);

    throttledFn("arg1", "arg2");
    expect(mockFn).toHaveBeenCalledWith("arg1", "arg2");
  });
});
