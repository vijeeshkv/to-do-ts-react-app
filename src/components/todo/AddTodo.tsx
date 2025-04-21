import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { AppDispatch } from '../../store/store';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); 

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
      // Redirect after adding the data
      navigate('/list'); 
    }
  };

  return (
    <Box display="flex" gap={2} mt={2}>
      <TextField
        label="New Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
