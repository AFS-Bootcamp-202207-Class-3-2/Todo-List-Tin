import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { createTodo } from "../../../api/todos";
import { addTodo } from "../todoListSlice";
import "./index.css";

export default function TodoGenerator() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todoText.length === 0) {
      message.warning('Cannot add an empty todo!');
      return ;
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
      <Input 
      className="generator__text" 
      placeholder="Input what you want" 
      value={todoText}
      onChange={(e) => setTodoText(e.target.value)}
      onKeyDown={onEnter}
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
