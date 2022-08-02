import TodoGenerator from "../TodoGenerator";
import TodoGroup from "../TodoGroup";
import "./index.css";

export default function TodoList() {
  return (
    <div className="list_container">
      <h1>Todo List</h1>
      <TodoGenerator />
      <TodoGroup />
    </div>
  );
}
