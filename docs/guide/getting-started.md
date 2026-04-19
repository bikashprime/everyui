# Getting Started

EveryUI is a React + TypeScript UI framework focused on clarity.

## Install

```bash
npm install everyui
```

## Import styles once

```ts
import 'everyui/styles.css';
```

## Build a screen in minutes

```tsx
import { Container, Stack, Button, Card } from 'everyui';

export function App() {
  return (
    <Container>
      <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
        <h1>Welcome to EveryUI</h1>
        <Card>
          <p>Simple UI for everyone.</p>
          <Button>Get started</Button>
        </Card>
      </Stack>
    </Container>
  );
}
```
