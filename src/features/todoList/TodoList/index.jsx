import { useSelector } from "react-redux";
import TodoGenerator from "../TodoGenerator";
import TodoGroup from "../TodoGroup";

export default function TodoList() {
  const todos = useSelector((state) => state.todoList);

  return (
    <>
      <h1>Todo List</h1>
      <TodoGroup inputArray={todos} />
      <TodoGenerator />
    </>
  );
}
