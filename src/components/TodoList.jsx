import React from "react";
import { useState } from "react";

import TodoGenerator from "./TodoGenerator/TodoGenerator";
import TodoGroup from "./TodoGroup/TodoGroup";

export default function TodoList() {
  const [inputArray, setInputArray] = useState([]);
  const addTodo = (item) => {
    setInputArray([...inputArray, item]);
  };
  return (
    <>
      <h1>Todo List</h1>
      <TodoGroup inputArray={inputArray} />
      <TodoGenerator addTodo={addTodo} />
    </>
  );
}
