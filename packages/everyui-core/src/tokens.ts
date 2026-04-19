export const everyuiTokens = {
  colors: {
    background: '#f7f8fb',
    surface: '#ffffff',
    surfaceMuted: '#f2f4f8',
    text: '#1f2937',
    textMuted: '#5b6472',
    border: '#d7deea',
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    success: '#15803d',
    warning: '#b45309',
    danger: '#b91c1c',
    focus: '#7aa2ff',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
  },
  radius: {
    sm: '0.4rem',
    md: '0.7rem',
    lg: '1rem',
    full: '999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.08)',
    md: '0 4px 16px rgba(15, 23, 42, 0.08)',
    lg: '0 10px 30px rgba(15, 23, 42, 0.12)',
  },
  typography: {
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    body: '1rem',
    small: '0.875rem',
    h1: '2rem',
    h2: '1.5rem',
  },
  motion: {
    quick: '120ms',
    normal: '180ms',
  },
} as const;

export type EveryUITokens = typeof everyuiTokens;
