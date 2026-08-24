export function getStartYear(period: string): number {
  const match = period.match(/(\d{4})/);
  return match ? parseInt(match[1]) : 0;
}

export function getDurationYears(period: string): number {
  const years = period.match(/(\d{4}).*?(\d{4}|今|present|至今)/);
  if (!years) return 0;
  const start = parseInt(years[1]);
  const end = years[2] === '今' || years[2] === 'present' || years[2] === '至今'
    ? new Date().getFullYear()
    : parseInt(years[2]);
  return end - start;
}
