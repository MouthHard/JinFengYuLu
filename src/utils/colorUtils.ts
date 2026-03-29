import type { CSSProperties } from "vue";

export interface ColorScheme {
  background: string;
  border: string;
  color: string;
}

export const COLOR_SCHEMES: ColorScheme[] = [
  {
    background: "rgba(255, 107, 107, 0.2)",
    border: "1px solid rgba(255, 107, 107, 0.8)",
    color: "rgba(255, 107, 107, 1)",
  },
  {
    background: "rgba(102, 126, 234, 0.2)",
    border: "1px solid rgba(102, 126, 234, 0.8)",
    color: "rgba(102, 126, 234, 1)",
  },
  {
    background: "rgba(147, 112, 219, 0.2)",
    border: "1px solid rgba(147, 112, 219, 0.8)",
    color: "rgba(147, 112, 219, 1)",
  },
  {
    background: "rgba(65, 215, 215, 0.2)",
    border: "1px solid rgba(65, 215, 215, 0.8)",
    color: "rgba(65, 215, 215, 1)",
  },
  {
    background: "rgba(255, 215, 0, 0.2)",
    border: "1px solid rgba(255, 215, 0, 0.8)",
    color: "rgba(255, 215, 0, 1)",
  },
  {
    background: "rgba(152, 251, 152, 0.2)",
    border: "1px solid rgba(152, 251, 152, 0.8)",
    color: "rgba(152, 251, 152, 1)",
  },
  {
    background: "rgba(255, 165, 0, 0.2)",
    border: "1px solid rgba(255, 165, 0, 0.8)",
    color: "rgba(255, 165, 0, 1)",
  },
  {
    background: "rgba(255, 192, 203, 0.2)",
    border: "1px solid rgba(255, 192, 203, 0.8)",
    color: "rgba(255, 192, 203, 1)",
  },
];

const colorCache = new Map<string, ColorScheme>();

export function getColorByString(str: string): CSSProperties {
  if (colorCache.has(str)) {
    const scheme = colorCache.get(str)!;
    return {
      background: scheme.background,
      border: scheme.border,
      color: scheme.color,
    };
  }

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % COLOR_SCHEMES.length;
  const colorScheme = COLOR_SCHEMES[index];
  colorCache.set(str, colorScheme);

  return {
    background: colorScheme.background,
    border: colorScheme.border,
    color: colorScheme.color,
  };
}

export function clearColorCache(): void {
  colorCache.clear();
}

export function getCacheSize(): number {
  return colorCache.size;
}
