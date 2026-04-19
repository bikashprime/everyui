import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: 'primary' | 'neutral';
  size?: 'sm' | 'md';
};

export function Button({ tone = 'primary', size = 'md', style, ...props }: ButtonProps) {
  const isPrimary = tone === 'primary';
  return (
    <button
      {...props}
      className={`everyui-focus ${props.className ?? ''}`.trim()}
      style={{
        borderRadius: 'var(--everyui-radius-full, 999px)',
        border: isPrimary ? 'none' : '1px solid var(--everyui-color-border)',
        background: isPrimary ? 'var(--everyui-color-primary)' : 'var(--everyui-color-surface)',
        color: isPrimary ? 'white' : 'var(--everyui-color-text)',
        padding: size === 'sm' ? '0.4rem 0.75rem' : '0.625rem 1rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: `background var(--everyui-motion-quick) ease`,
        ...style,
      }}
    />
  );
}
