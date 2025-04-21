import { Container, Typography } from '@mui/material';
import TodoList from '../components/todo/TodoList';

const ListPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Todo List
    </Typography>
    <TodoList />
  </Container>
);

export default ListPage;
