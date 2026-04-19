import 'everyui/styles.css';
import { Button, Card, Container, Navbar, Row, Stack } from 'everyui';

export function App() {
  return (
    <>
      <Navbar>
        <strong>EveryUI</strong>
        <Button tone="neutral">Docs</Button>
      </Navbar>
      <Container>
        <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
          <h1>Native-feeling UI, zero complexity.</h1>
          <Card>
            <p>Build modern interfaces with friendly defaults.</p>
            <Row>
              <Button>Get started</Button>
              <Button tone="neutral">View examples</Button>
            </Row>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
