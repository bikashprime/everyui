import type { HTMLAttributes } from 'react';
import { Container, Row } from './layout';

export function Navbar({ children, style, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <header
      {...props}
      style={{
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(8px)',
        background: 'rgba(247,248,251,0.85)',
        borderBottom: '1px solid var(--everyui-color-border)',
        ...style,
      }}
    >
      <Container>
        <Row justify="space-between" style={{ minHeight: '3.5rem' }}>
          {children}
        </Row>
      </Container>
    </header>
  );
}
