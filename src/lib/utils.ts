import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatValue(value: number): string {
  return 'R$ ' + format(value);
}

export function format(count: number) {
  if (count < 1_000) return count.toFixed(2);
  if (count < 10_000) return count.toLocaleString('en-US');
  if (count < 1_000_000) return `${(count / 1_000).toFixed(2)}K`;
  return `${(count / 1_000_000).toFixed(2)}M`;
}
