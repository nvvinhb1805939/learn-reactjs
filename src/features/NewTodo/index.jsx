import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import NewTodoList from "./components/NewTodoList";

function NewTodoFeature() {
  const [todoList, setTodoList] = useState([]);
  const handleSubmit = todo => {
    const newTodoList = [...todoList];
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };
  const handleTodoClick = innertText => {
    const isRemoved = window.confirm("Bạn có muốn xoá item này không?");
    if (!isRemoved) return;
    const removedIndex = todoList.findIndex(todoItem => {
      return todoItem.action === innertText.slice(0, innertText.length - 1);
    });
    const newTodoList = [...todoList];
    newTodoList.splice(removedIndex, 1);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <NewTodoForm onSubmit={handleSubmit} />
      <NewTodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default NewTodoFeature;
