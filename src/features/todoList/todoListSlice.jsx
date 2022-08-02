import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  
];

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        done: false,
      });
    },
    doneTodo: (state, action) => {
      const todo = state.find((target) => target.id == action.payload);
      todo.done = !todo.done;
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.findIndex((target) => target.id == action.payload);
      if(todoIndex >= 0){
        state.splice(todoIndex, 1);
      }
    },
  },
});

export const { addTodo, doneTodo, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
