# EveryUI

**Simple UI for everyone.**

Build native-feeling interfaces without JavaScript complexity.

## Vision

EveryUI helps beginners and non-JavaScript developers build modern, accessible UI with very little code.

### Product principles

- Radically simple API
- Friendly defaults over endless options
- Accessibility by default
- Clear docs in plain English

## Monorepo structure

- `packages/everyui-core` — framework package
- `docs` — VitePress documentation site
- `examples/*` — runnable examples
- `templates/*` — starter templates

## Installation

```bash
npm install everyui
```

```ts
import 'everyui/styles.css';
```

## Quick start

```tsx
import { Container, Stack, Card, Button } from 'everyui';

export function App() {
  return (
    <Container>
      <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
        <h1>EveryUI</h1>
        <Card>
          <p>Simple UI for everyone.</p>
          <Button>Start</Button>
        </Card>
      </Stack>
    </Container>
  );
}
```

## Component list

Button, Input, Textarea, Select, Checkbox, RadioGroup, Card, Dialog, Tabs, Toast, Navbar, Container, Stack, Row, Grid, EmptyState, FormField.

## Usage examples

See `examples/landing`, `examples/dashboard`, `examples/settings`, and `examples/contact`.

## Contributing

1. Fork and clone.
2. Install dependencies with `pnpm install`.
3. Run `pnpm test` and `pnpm build`.
4. Open a pull request.

Please keep APIs small, names clear, and docs beginner-friendly.
