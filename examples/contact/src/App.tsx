import 'everyui/styles.css';
import { Button, Card, Container, FormField, Input, Stack, Textarea } from 'everyui';

export function App() {
  return (
    <Container>
      <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
        <h1>Contact us</h1>
        <Card>
          <Stack gap="md">
            <FormField label="Name"><Input /></FormField>
            <FormField label="Email"><Input type="email" /></FormField>
            <FormField label="Message"><Textarea rows={5} /></FormField>
            <Button>Send message</Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
