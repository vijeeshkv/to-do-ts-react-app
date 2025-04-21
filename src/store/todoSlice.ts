import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';
import { v4 as uuidv4 } from 'uuid';

interface TodoState {
  list: Todo[];
}

const initialState: TodoState = {
  list: JSON.parse(localStorage.getItem('todos') || '[]'),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({ id: uuidv4(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.list.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;