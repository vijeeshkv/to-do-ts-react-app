import { Container, Typography } from '@mui/material';
import AddTodo from '../components/todo/AddTodo';

const AddPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Add Todo
    </Typography>
    <AddTodo />
  </Container>
);

export default AddPage;
