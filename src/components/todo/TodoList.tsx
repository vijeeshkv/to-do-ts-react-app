import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { deleteTodo, updateTodo } from '../../store/todoSlice';
import { List, ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.list);
  const sortedTodos = [...todos].reverse();
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');

  const handleEdit = (id: string, currentText: string) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSave = (id: string) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <List>
      {sortedTodos.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <>
              {editId === todo.id ? (
                <IconButton edge="end" color="primary" onClick={() => handleSave(todo.id)}>
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton edge="end" color="secondary" onClick={() => handleEdit(todo.id, todo.text)}>
                  <EditIcon />
                </IconButton>
              )}
              <IconButton edge="end" color="error" onClick={() => dispatch(deleteTodo(todo.id))}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          {editId === todo.id ? (
            <TextField
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              sx={{ width: { xs: '100%', sm: '97%' } }}
              size="small"
            />
          ) : (
            <ListItemText primary={todo.text} />
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
