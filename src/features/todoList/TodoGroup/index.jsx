import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

export default function TodoGroup() {
  const itemList = useSelector((state) => state.todoList);
  
  return (
    <div>
      {itemList.map((itemValue) => {
        return <TodoItem key={itemValue.id} itemValue={itemValue} />;
      })}
    </div>
  );
}
