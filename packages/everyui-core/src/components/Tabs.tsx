import { useState, type ReactNode } from 'react';
import { Button } from './Button';
import { Row, Stack } from './layout';

export function Tabs({ items, defaultValue }: { items: { value: string; label: string; panel: ReactNode }[]; defaultValue?: string }) {
  const [active, setActive] = useState(defaultValue ?? items[0]?.value);
  const current = items.find((item) => item.value === active);
  return (
    <Stack gap="md">
      <Row role="tablist" gap="sm">
        {items.map((item) => (
          <Button
            key={item.value}
            role="tab"
            aria-selected={active === item.value}
            tone={active === item.value ? 'primary' : 'neutral'}
            onClick={() => setActive(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </Row>
      <div role="tabpanel">{current?.panel}</div>
    </Stack>
  );
}
