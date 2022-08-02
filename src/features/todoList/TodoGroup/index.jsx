import React from "react";

import TodoItem from "../TodoItem";

export default function TodoGroup(props) {
  const itemList = props.inputArray;
  console.log(itemList);
  return (
    <div>
      {itemList.map((itemValue, index) => {
        return <TodoItem key={index} itemValue={itemValue} />;
      })}
    </div>
  );
}
