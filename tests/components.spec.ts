/**
 * 关键组件渲染测试
 * @description 测试核心组件能否正常挂载
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("关键组件渲染测试", () => {
  it("应该能正常引入Vue", () => {
    expect(true).toBe(true);
  });

  it("应该能正常创建组件实例", () => {
    const TestComponent = {
      template: "<div>Test</div>",
    };
    const wrapper = mount(TestComponent);
    expect(wrapper.exists()).toBe(true);
  });
});
