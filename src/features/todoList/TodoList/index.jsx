import { useState } from "react";
import TodoGenerator from "../TodoGenerator";
import TodoGroup from "../TodoGroup";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (item) => {
    setTodos([...todos, item]);
  };
  return (
    <>
      <h1>Todo List</h1>
      <TodoGroup inputArray={todos} />
      <TodoGenerator addTodo={addTodo} />
    </>
  );
}
