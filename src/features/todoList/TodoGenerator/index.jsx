import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../api/todos";
import { addTodo } from "../todoListSlice";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./index.css";

export default function TodoGenerator() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todoText.length === 0) {
      alert("illegal input");
      return;
    }
    createTodo(todoText).then((response) => {
      dispatch(addTodo(response.data));
    });
    setTodoText("");
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      handleAdd();
    }
  };
  return (
    <div className="generator">
      <input
        className="generator__text"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={onEnter}
        placeholder="Input what you want"
      />
      <Button
        className="generator__btn"
        onClick={handleAdd}
        type="primary"
        icon={<PlusOutlined />}
      >
        Add
      </Button>
    </div>
  );
}
