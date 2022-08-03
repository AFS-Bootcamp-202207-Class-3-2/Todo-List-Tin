import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { doneTodo, deleteTodo, updateTest } from "../todoListSlice";
import { updateTodo, delTodo, updateTextTodo } from "../../../api/todos";
import "./index.css";

export default function TodoItem(props) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [todoText, setTodoText] = useState("");
  const { itemValue } = props;
  const dispatch = useDispatch();

  const clickDone = () => {
    updateTodo(itemValue.id, !itemValue.done).then((response) => {
      dispatch(doneTodo(response.data));
    });
  };

  const clickDelete = () => {
    delTodo(itemValue.id).then((response) => {
      dispatch(deleteTodo(response.data));
    });
  };

  const clickEdit = () => {
    setTodoText(itemValue.text);
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    updateTextTodo(itemValue.id, todoText).then((response) => {
      console.log(response.data);
      dispatch(updateTest(response.data));
    });
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setTodoText(itemValue.text);
    setVisible(false);
  };

  return (
    <>
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
        <TextArea rows={4} value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
      </Modal>
    </>
  );
}
