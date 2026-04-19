import { useEffect } from 'react';
import { Card } from './Card';

export function Toast({ message, open, onClose, tone = 'neutral' }: { message: string; open: boolean; onClose: () => void; tone?: 'neutral' | 'success' | 'danger' }) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, 3000);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;
  const borderColor = tone === 'success' ? '#15803d' : tone === 'danger' ? '#b91c1c' : 'var(--everyui-color-border)';
  return (
    <div aria-live="polite" style={{ position: 'fixed', bottom: '1rem', right: '1rem', width: 'min(320px, calc(100vw - 2rem))' }}>
      <Card style={{ borderColor }}>
        <p style={{ margin: 0 }}>{message}</p>
      </Card>
    </div>
  );
}
