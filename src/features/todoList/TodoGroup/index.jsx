import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

export default function TodoGroup() {
  const itemList = useSelector((state => state.todoList));
  return (
    <div>
      {itemList.map((itemValue, index) => {
        return <TodoItem key={index} itemValue={itemValue} />;
      })}
    </div>
  );
}
