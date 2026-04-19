import type { InputHTMLAttributes } from 'react';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`everyui-input ${props.className ?? ''}`.trim()} />;
}
