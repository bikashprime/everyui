import type { TextareaHTMLAttributes } from 'react';

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`everyui-textarea ${props.className ?? ''}`.trim()} />;
}
