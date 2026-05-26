<template>
  <div class="falling-leaves">
    <!-- 
      落叶容器 - 直接使用导入的SVG组件
      每个leaf-item包含一个SVG组件，动画效果已配置好
    -->
    <div v-for="(leaf, index) in leaves" :key="index" class="leaf-item" :style="getLeafStyle(leaf, index)">
      <!-- 
        根据leaf.type动态选择不同的SVG组件
        你可以添加更多Leaf组件（LeafD, LeafE等）
      -->
      <component :is="getLeafComponent(leaf.type)" class="leaf-svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 🍂 统一导入所有树叶组件
import { leafComponents } from './Leaf';

interface Leaf {
  x: number;           // 水平位置（百分比）
  y: number;           // 垂直位置（百分比）
  size: number;        // 大小（px）
  opacity: number;     // 透明度
  speed: number;       // 下落速度
  rotation: number;    // 当前旋转角度
  rotationSpeed: number; // 旋转速度
  swayAmplitude: number; // 左右摆动幅度
  swaySpeed: number;   // 摆动频率
  swayOffset: number;  // 摆动偏移（让每片叶子摆动不同步）
  type: number;        // 树叶形状类型（对应不同的SVG组件）
  flipSpeed: number;   // 翻转速度
  flipAngle: number;   // 当前翻转角度
}

// 根据类型获取对应的SVG组件
const getLeafComponent = (type: number) => {
  return leafComponents[type % leafComponents.length];
};

const leaves = ref<Leaf[]>([]);
let animationId: number | null = null;

// 🌿 生成随机叶子配置
const generateLeaf = (): Leaf => {
  return {
    x: Math.random() * 100,                    // 水平位置：0-100%
    y: -10 - Math.random() * 20,               // 垂直位置：从屏幕上方开始
    size: 40 + Math.random() * 60,             // 大小：40-100px（更大）
    opacity: 0.3 + Math.random() * 0.3,        // 透明度：0.3-0.6
    speed: 0.02 + Math.random() * 0.03,        // 下落速度：0.02-0.05（很慢）
    rotation: Math.random() * 360,             // 初始旋转角度：0-360度
    rotationSpeed: (Math.random() - 0.5) * 0.3, // 旋转速度：-0.15到0.15度/帧
    swayAmplitude: 15 + Math.random() * 20,    // 左右摆动幅度：15-35
    swaySpeed: 0.008 + Math.random() * 0.012,  // 摆动频率：0.008-0.02
    swayOffset: Math.random() * Math.PI * 2,   // 摆动偏移：让每片叶子不同步
    type: Math.floor(Math.random() * leafComponents.length), // 形状类型：根据组件数量
    flipSpeed: (Math.random() - 0.5) * 0.02,   // 翻转速度：轻微翻转
    flipAngle: 0,                              // 当前翻转角度
  };
};

// 初始化叶子
const initLeaves = () => {
  const leafCount = 25; // 叶子数量
  for (let i = 0; i < leafCount; i++) {
    const leaf = generateLeaf();
    leaf.y = Math.random() * 120; // 初始分布在整个屏幕
    leaves.value.push(leaf);
  }
};

// 🎬 动画循环
const animate = () => {
  leaves.value.forEach((leaf, index) => {
    // 1. 更新垂直位置（下落）
    leaf.y += leaf.speed;

    // 2. 更新旋转角度（旋转）
    leaf.rotation += leaf.rotationSpeed;

    // 3. 更新翻转角度（3D翻转效果）
    leaf.flipAngle += leaf.flipSpeed;

    // 4. 如果叶子超出屏幕底部，重置到顶部
    if (leaf.y > 110) {
      leaves.value[index] = generateLeaf();
    }
  });

  animationId = requestAnimationFrame(animate);
};

// 🎨 获取叶子样式（包含所有动画效果）
const getLeafStyle = (leaf: Leaf, index: number) => {
  // 计算左右摆动
  const sway = Math.sin(leaf.y * leaf.swaySpeed + leaf.swayOffset) * leaf.swayAmplitude;

  // 计算3D翻转效果
  const flipScale = Math.cos(leaf.flipAngle);

  return {
    left: `${leaf.x + sway * 0.1}%`,           // 水平位置 + 摆动
    top: `${leaf.y}%`,                         // 垂直位置
    width: `${leaf.size}px`,                   // 宽度
    height: `${leaf.size}px`,                  // 高度
    opacity: leaf.opacity,                     // 透明度
    transform: `rotate(${leaf.rotation}deg) scaleX(${flipScale})`, // 旋转 + 翻转
    animationDelay: `${index * 0.15}s`,        // 动画延迟
  };
};

onMounted(() => {
  initLeaves();
  animate();
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>

<style lang="scss" scoped>
.falling-leaves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; // 不阻挡鼠标事件
  overflow: hidden; // 隐藏超出容器的叶子
  z-index: 0; // 在所有内容下方
}

.leaf-item {
  position: absolute;
  will-change: transform, top, left, opacity; // 性能优化
  transition: none;
}

.leaf-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05)); // 轻微阴影
}
</style>
