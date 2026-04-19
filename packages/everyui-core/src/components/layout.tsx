import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { gapToSpace, type Gap } from '../types';

type LayoutProps = PropsWithChildren<{ gap?: Gap; align?: CSSProperties['alignItems']; justify?: CSSProperties['justifyContent'] }> &
  HTMLAttributes<HTMLDivElement>;

export function Container({ children, style, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      style={{
        width: 'min(1100px, 100%)',
        marginInline: 'auto',
        paddingInline: '1rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Stack({ children, gap = 'md', align, justify, style, ...props }: LayoutProps) {
  return (
    <div {...props} style={{ display: 'flex', flexDirection: 'column', gap: gapToSpace[gap], alignItems: align, justifyContent: justify, ...style }}>
      {children}
    </div>
  );
}

export function Row({ children, gap = 'md', align = 'center', justify, style, ...props }: LayoutProps) {
  return (
    <div
      {...props}
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: gapToSpace[gap], alignItems: align, justifyContent: justify, ...style }}
    >
      {children}
    </div>
  );
}

export function Grid({ children, gap = 'md', min = 240, style, ...props }: LayoutProps & { min?: number }) {
  return (
    <div
      {...props}
      style={{ display: 'grid', gap: gapToSpace[gap], gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, ...style }}
    >
      {children}
    </div>
  );
}
