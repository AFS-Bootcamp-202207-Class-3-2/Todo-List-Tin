import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoListSlice";
import "./index.css";

export default function TodoGenerator() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(todoText));
    setTodoText("");
  };
  return (
    <div className="generator">
      <input
        className="generator__text"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <input
        className="generator__btn"
        type="button"
        value="add"
        onClick={handleAdd}
      />
    </div>
  );
}
