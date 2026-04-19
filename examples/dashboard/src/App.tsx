import 'everyui/styles.css';
import { Card, Container, Grid, Stack } from 'everyui';

export function App() {
  return (
    <Container>
      <Stack gap="lg" style={{ paddingBlock: '2rem' }}>
        <h1>Dashboard</h1>
        <Grid>
          <Card><h3>Revenue</h3><p>$12,420</p></Card>
          <Card><h3>New users</h3><p>382</p></Card>
          <Card><h3>Tickets</h3><p>19 open</p></Card>
        </Grid>
      </Stack>
    </Container>
  );
}
