import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    doneTodo: (state, action) => {
      const todoIndex = state.findIndex(
        (target) => target.id === action.payload.id
      );
      if (todoIndex >= 0) {
        state[todoIndex] = action.payload;
      }
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.findIndex(
        (target) => target.id === action.payload.id
      );
      if (todoIndex >= 0) {
        state.splice(todoIndex, 1);
      }
    },
    addTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, doneTodo, deleteTodo, addTodos } =
  todoListSlice.actions;
export default todoListSlice.reducer;
