import { useId, type InputHTMLAttributes } from 'react';
import { Stack } from './layout';

type Option = { label: string; value: string };
type Props = {
  label: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Option[];
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>;

export function RadioGroup({ label, options, onChange, name, value, ...props }: Props) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{label}</legend>
      <Stack gap="sm">
        {options.map((option) => (
          <label key={option.value} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <input
              {...props}
              type="radio"
              className="everyui-focus"
              name={groupName}
              value={option.value}
              checked={value === option.value}
              onChange={(event) => onChange?.(event.target.value)}
            />
            {option.label}
          </label>
        ))}
      </Stack>
    </fieldset>
  );
}
