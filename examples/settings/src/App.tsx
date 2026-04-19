import 'everyui/styles.css';
import { Button, Card, Checkbox, Container, FormField, Input, Select, Stack } from 'everyui';

export function App() {
  return (
    <Container>
      <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
        <h1>Settings</h1>
        <Card>
          <Stack gap="md">
            <FormField label="Display name"><Input placeholder="Jane" /></FormField>
            <FormField label="Language"><Select><option>English</option><option>Spanish</option></Select></FormField>
            <Checkbox label="Enable email updates" defaultChecked />
            <Button>Save</Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
