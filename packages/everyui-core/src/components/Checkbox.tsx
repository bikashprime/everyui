import type { InputHTMLAttributes } from 'react';
import { Row } from './layout';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string };

export function Checkbox({ label, id, ...props }: Props) {
  return (
    <Row as="label" gap="sm" align="center" style={{ cursor: 'pointer' }}>
      <input id={id} type="checkbox" className="everyui-focus" {...props} />
      <span>{label}</span>
    </Row>
  );
}
