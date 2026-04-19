# First App Tutorial

Build a settings page with almost no custom CSS.

```tsx
import { Container, Stack, Card, FormField, Input, Button } from 'everyui';

export function SettingsPage() {
  return (
    <Container>
      <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
        <h1>Profile Settings</h1>
        <Card>
          <Stack gap="md">
            <FormField label="Name" hint="Shown on your profile.">
              <Input placeholder="Jane Doe" />
            </FormField>
            <Button>Save changes</Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
```
