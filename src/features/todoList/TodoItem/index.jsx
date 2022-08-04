import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { doneTodo, deleteTodo, updateText } from "../todoListSlice";
import { updateTodo, delTodo } from "../../../api/todos";
import "./index.css";

export default function TodoItem(props) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [todoText, setTodoText] = useState("");
  const { itemValue } = props;
  const dispatch = useDispatch();

  const clickDone = () => {
    const todo = {
      done: !itemValue.done,
    };
    updateTodo(itemValue.id, todo).then((response) => {
      dispatch(doneTodo(response.data.data));
    });
  };

  const clickDelete = () => {
    delTodo(itemValue.id).then((response) => {
      if (response.status === 204) {
        dispatch(deleteTodo(response.data.data));
      }
    });
  };

  const clickEdit = () => {
    setTodoText(itemValue.text);
    setVisible(true);
  };

  const handleOk = () => {
    const todo = {
      text: todoText,
    };
    setConfirmLoading(true);
    updateTodo(itemValue.id, todo).then((response) => {
      dispatch(doneTodo(response.data.data));
    });
    const timer = setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleCancel = () => {
    setTodoText(itemValue.text);
    setVisible(false);
  };

  return (
    <div id="item-todo">
      <div className={itemValue.done ? "item_to_done" : "item"}>
        <div className={itemValue.done ? "item_done" : ""} onClick={clickDone}>
          {itemValue.text}
        </div>
        <div className="item_edit">
          <EditOutlined onClick={clickEdit} />
        </div>
        <div className="item_delete">
          <DeleteOutlined onClick={clickDelete} />
        </div>
      </div>
      <Modal
        title="Edit the text"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TextArea
          rows={4}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </Modal>
    </div>
  );
}
