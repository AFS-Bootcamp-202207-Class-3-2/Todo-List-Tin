import { useSelector } from "react-redux";
import TodoDoneItem from "../TodoDoneItem";

export default function TodoDoneList() {
  const itemList = useSelector((state) => state.todoList.filter((item) => item.done));
  return (
    <div>
      <h1>Done List</h1>
      {itemList.map((itemValue) => {
        return <TodoDoneItem key={itemValue.id} itemValue={itemValue} />;
      })}
    </div>
  );
}
