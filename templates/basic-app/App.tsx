import 'everyui/styles.css';
import { Button, Card, Container, Stack } from 'everyui';

export default function App() {
  return (
    <Container>
      <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
        <h1>Hello EveryUI</h1>
        <Card>
          <p>Simple UI for everyone.</p>
          <Button>Continue</Button>
        </Card>
      </Stack>
    </Container>
  );
}
