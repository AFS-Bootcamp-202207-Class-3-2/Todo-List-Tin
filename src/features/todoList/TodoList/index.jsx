import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../../api/todos";
import TodoGenerator from "../TodoGenerator";
import TodoGroup from "../TodoGroup";
import { addTodos } from "../todoListSlice";
import "./index.css";

export default function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos().then(response => {
      dispatch(addTodos(response.data));
    });
  }, []);
  return (
    <div className="list_container">
      <h1>Todo List</h1>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
}
