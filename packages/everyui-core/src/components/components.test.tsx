import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button, Dialog, FormField, Input, Tabs } from '../index';

describe('EveryUI core components', () => {
  it('renders a clickable button', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Save</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(onClick).toHaveBeenCalled();
  });

  it('wires labels and hints in form fields', () => {
    render(
      <FormField label="Email" hint="We never spam" error="Required">
        <Input />
      </FormField>,
    );
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('We never spam Required');
  });

  it('shows dialog semantics', () => {
    render(
      <Dialog open title="Confirm" onClose={() => {}}>
        Are you sure?
      </Dialog>,
    );
    expect(screen.getByRole('dialog', { name: 'Confirm' })).toBeInTheDocument();
  });

  it('switches tab panels', () => {
    render(<Tabs items={[{ value: 'a', label: 'A', panel: 'One' }, { value: 'b', label: 'B', panel: 'Two' }]} />);
    fireEvent.click(screen.getByRole('tab', { name: 'B' }));
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Two');
  });
});
