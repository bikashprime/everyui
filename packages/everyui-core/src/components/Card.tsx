import type { HTMLAttributes } from 'react';
import { cardStyle } from '../types';

export function Card({ style, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section {...props} style={{ padding: '1rem', ...cardStyle, ...style }} />;
}
