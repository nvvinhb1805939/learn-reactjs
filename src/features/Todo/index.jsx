import React from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      action: "Eating",
    },
    {
      id: 2,
      action: "Sleeping",
    },
    {
      id: 3,
      action: "Coding",
    },
  ];
  return <TodoList todoList={todoList} />;
}

export default TodoFeature;
