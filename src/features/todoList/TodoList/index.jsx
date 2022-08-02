import TodoGenerator from "../TodoGenerator";
import TodoGroup from "../TodoGroup";

export default function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoGroup/>
      <TodoGenerator />
    </>
  );
}
