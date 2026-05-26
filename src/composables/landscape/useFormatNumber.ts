import { computed, type Ref } from 'vue'
import { formatNumber, formatDuration, formatFileSize } from '@/utils/landscape/format'

export function useFormatNumber() {
  const formatCount = formatNumber

  const formatPrice = (price: number): string => {
    if (price >= 10000) return `¥${(price / 10000).toFixed(1)}万`
    return `¥${price.toFixed(0)}`
  }

  const formatPercentage = (value: number, total: number): string => {
    if (total === 0) return '0%'
    return ((value / total) * 100).toFixed(1) + '%'
  }

  return {
    formatCount,
    formatDuration,
    formatPrice,
    formatFileSize,
    formatPercentage
  }
}

export function useFormattedNumber(value: Ref<number> | number) {
  const { formatCount } = useFormatNumber()
  
  const formatted = computed(() => {
    const num = typeof value === 'number' ? value : value.value
    return formatCount(num)
  })
  
  return { formatted }
}
