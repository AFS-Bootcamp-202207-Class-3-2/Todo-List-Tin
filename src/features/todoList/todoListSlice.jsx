import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
    text: "todo example",
    done: false,
  },
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
  },
});

export const { addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
