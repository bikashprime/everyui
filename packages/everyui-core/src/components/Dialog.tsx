import { useEffect, type PropsWithChildren } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Stack } from './layout';

export function Dialog({ open, title, onClose, children }: PropsWithChildren<{ open: boolean; title: string; onClose: () => void }>) {
  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="presentation" onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.35)', display: 'grid', placeItems: 'center', padding: '1rem' }}>
      <Card role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()} style={{ width: 'min(500px,100%)' }}>
        <Stack gap="md">
          <h2 style={{ margin: 0 }}>{title}</h2>
          {children}
          <div>
            <Button tone="neutral" onClick={onClose}>Close</Button>
          </div>
        </Stack>
      </Card>
    </div>
  );
}
