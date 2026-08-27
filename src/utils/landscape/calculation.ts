export function getDifficultyLabel(difficulty?: string): string {
  const labels: Record<string, string> = {
    beginner: '入门',
    intermediate: '进阶',
    advanced: '专家'
  }
  return labels[difficulty || 'intermediate'] || '进阶'
}

export function getDifficultyColor(difficulty?: string): string {
  const colors: Record<string, string> = {
    beginner: '#52c41a',
    intermediate: '#1890ff',
    advanced: '#f5222d'
  }
  return colors[difficulty || 'intermediate'] || '#1890ff'
}

export function getDifficultyLevel(difficulty?: string): number {
  const levels: Record<string, number> = {
    beginner: 1,
    intermediate: 2,
    advanced: 3
  }
  return levels[difficulty || 'intermediate'] || 2
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes}分钟`
}

export function calculateProgress(current: number, total: number): number {
  if (total === 0) return 0
  return Math.round((current / total) * 100)
}

export function calculateRating(ratings: number[]): number {
  if (ratings.length === 0) return 0
  const sum = ratings.reduce((acc, val) => acc + val, 0)
  return Math.round((sum / ratings.length) * 10) / 10
}

export function calculateEngagementScore(views: number, likes: number, comments: number, shares: number): number {
  const viewWeight = 1
  const likeWeight = 3
  const commentWeight = 5
  const shareWeight = 10
  
  const score = (views * viewWeight) + (likes * likeWeight) + (comments * commentWeight) + (shares * shareWeight)
  return Math.round(score / 100)
}

export function calculateTrend(current: number, previous: number): { value: number; percentage: number; direction: 'up' | 'down' | 'same' } {
  const value = current - previous
  const percentage = previous === 0 ? 0 : Math.round((value / previous) * 100)
  const direction = value > 0 ? 'up' : value < 0 ? 'down' : 'same'
  
  return { value, percentage, direction }
}
