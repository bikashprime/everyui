import type { CSSProperties } from 'react';

export type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const gapToSpace: Record<Gap, string> = {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
};

export const cardStyle: CSSProperties = {
  background: 'var(--everyui-color-surface)',
  border: '1px solid var(--everyui-color-border)',
  borderRadius: 'var(--everyui-radius-md)',
  boxShadow: 'var(--everyui-shadow-sm)',
};
