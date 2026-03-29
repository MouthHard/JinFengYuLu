/**
 * LazyImage 组件测试
 * @description 测试图片懒加载组件的核心功能
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import LazyImage from "@/components/common/LazyImage/index.vue";

describe("LazyImage 组件", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("应该正确渲染组件", () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/image.jpg",
        alt: "测试图片",
      },
    });

    expect(wrapper.find(".lazy-image").exists()).toBe(true);
  });

  it("应该正确传递 alt 属性", async () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/image.jpg",
        alt: "测试图片描述",
      },
    });

    const vm = wrapper.vm as unknown as { isVisible: boolean };
    vm.isVisible = true;
    await wrapper.vm.$nextTick();

    const img = wrapper.find("img");
    expect(img.attributes("alt")).toBe("测试图片描述");
  });

  it("应该显示占位符当图片未可见时", () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/image.jpg",
      },
    });

    expect(wrapper.find(".lazy-image__placeholder").exists()).toBe(true);
  });

  it("应该支持自定义占位符插槽", () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/image.jpg",
      },
      slots: {
        placeholder: "<div class='custom-placeholder'>加载中...</div>",
      },
    });

    expect(wrapper.find(".custom-placeholder").exists()).toBe(true);
    expect(wrapper.find(".custom-placeholder").text()).toBe("加载中...");
  });

  it("应该支持自定义错误插槽", async () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/invalid-image.jpg",
      },
      slots: {
        error: "<div class='custom-error'>图片加载失败</div>",
      },
    });

    const vm = wrapper.vm as unknown as { hasError: boolean };
    vm.hasError = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".custom-error").exists()).toBe(true);
  });

  it("应该正确处理图片加载成功事件", async () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/image.jpg",
      },
    });

    const vm = wrapper.vm as unknown as { isVisible: boolean };
    vm.isVisible = true;
    await wrapper.vm.$nextTick();

    const img = wrapper.find("img");
    await img.trigger("load");

    expect(wrapper.emitted("load")).toBeTruthy();
  });

  it("应该正确处理图片加载失败事件", async () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/invalid.jpg",
      },
    });

    const vm = wrapper.vm as unknown as { isVisible: boolean };
    vm.isVisible = true;
    await wrapper.vm.$nextTick();

    const img = wrapper.find("img");
    await img.trigger("error");

    expect(wrapper.emitted("error")).toBeTruthy();
  });

  it("应该正确应用加载完成的样式", async () => {
    const wrapper = mount(LazyImage, {
      props: {
        src: "https://example.com/image.jpg",
      },
    });

    const vm = wrapper.vm as unknown as {
      isVisible: boolean;
      isLoaded: boolean;
    };
    vm.isVisible = true;
    await wrapper.vm.$nextTick();

    const img = wrapper.find("img");
    await img.trigger("load");

    vm.isLoaded = true;
    await wrapper.vm.$nextTick();

    expect(img.classes()).toContain("loaded");
  });
});
