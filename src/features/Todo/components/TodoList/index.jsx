import classNames from "classnames";
import React from "react";
import "./style.scss";

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = index => {
    if (!onTodoClick) return;
    onTodoClick(index);
  };
  return (
    <ul>
      {todoList.map((todoItem, index) => (
        <li
          className={classNames("list", {
            active: todoItem.status === "completed",
          })}
          key={todoItem.id}
          onClick={() => {
            handleTodoClick(index);
          }}
        >
          {todoItem.action}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
