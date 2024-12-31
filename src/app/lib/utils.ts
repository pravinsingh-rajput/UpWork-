export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }
  
  export function calculateProgress(current: number, goal: number): number {
    return Math.min(Math.round((current / goal) * 100), 100)
  }
  
  