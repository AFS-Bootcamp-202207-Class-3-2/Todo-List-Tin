import "./index.css";
import { doneTodo, deleteTodo } from "../todoListSlice";
import { useDispatch } from "react-redux";
import { updateTodo, delTodo } from "../../../api/todos";
export default function TodoItem(props) {
  const { itemValue } = props;
  const dispatch = useDispatch();

  const clickDone = () => {
    updateTodo(itemValue.id, !itemValue.done).then((response) => {
      console.log(response.data);
      dispatch(doneTodo(response.data));
    });
  };

  const clickDelete = () => {
    delTodo(itemValue.id).then((response) => {
      dispatch(deleteTodo(response.data))
    });
  };

  return (
    <div className={itemValue.done ? "item_to_done" : "item"}>
      <div className={itemValue.done ? "item_done" : ""} onClick={clickDone}>
        {itemValue.text}
      </div>
      <div className="item_delete" onClick={clickDelete}>
        &times;
      </div>
    </div>
  );
}
