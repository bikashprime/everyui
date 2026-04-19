import type { ReactNode } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Stack } from './layout';

export function EmptyState({ title, message, actionLabel, onAction }: { title: string; message: string; actionLabel?: string; onAction?: () => void; icon?: ReactNode }) {
  return (
    <Card>
      <Stack gap="sm" align="center" style={{ textAlign: 'center', padding: '1rem' }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: 0, color: 'var(--everyui-color-text-muted)' }}>{message}</p>
        {actionLabel ? <Button onClick={onAction}>{actionLabel}</Button> : null}
      </Stack>
    </Card>
  );
}
