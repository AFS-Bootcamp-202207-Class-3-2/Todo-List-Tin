import "./index.css";
import { doneTodo, deleteTodo } from "../todoListSlice";
import { useDispatch } from "react-redux";
export default function TodoItem(props) {
  const { itemValue } = props;
  const dispatch = useDispatch();

  const clickDone = () => {
    dispatch(doneTodo(itemValue.id));
  };

  const clickDelete = () => {
    dispatch(deleteTodo(itemValue.id));
  };

  return (
    <div className="item">
      <div
        className={itemValue.done ? "item_done" : ""}
        onClick={clickDone}
      >
        {itemValue.text}
      </div>
      <div className="item_delete" onClick={clickDelete}>&times;</div>
    </div>
  );
}
