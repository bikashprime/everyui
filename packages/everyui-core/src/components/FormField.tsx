import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from 'react';
import { Stack } from './layout';

type FormFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  children: ReactElement;
  id?: string;
};

export function FormField({ label, hint, error, children, id }: FormFieldProps) {
  const generated = useId();
  const fieldId = id ?? generated;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errId = error ? `${fieldId}-error` : undefined;
  const describedBy = [hintId, errId].filter(Boolean).join(' ') || undefined;

  const control: ReactNode = isValidElement(children)
    ? cloneElement(children, {
        id: fieldId,
        'aria-invalid': Boolean(error) || undefined,
        'aria-describedby': describedBy,
      })
    : children;

  return (
    <Stack gap="xs">
      <label htmlFor={fieldId} style={{ fontWeight: 600 }}>
        {label}
      </label>
      {control}
      {hint ? (
        <small id={hintId} style={{ color: 'var(--everyui-color-text-muted)' }}>
          {hint}
        </small>
      ) : null}
      {error ? (
        <small id={errId} style={{ color: '#b91c1c' }} role="alert">
          {error}
        </small>
      ) : null}
    </Stack>
  );
}
