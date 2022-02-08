import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initialTodoList = [
    {
      id: 1,
      action: "Eating",
      status: "new",
    },
    {
      id: 2,
      action: "Sleeping",
      status: "completed",
    },
    {
      id: 3,
      action: "Coding",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(initialTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");
  const handleTodoClick = index => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };
  const handleShowAll = () => {
    setFilteredStatus("all");
  };
  const handleShowCompleted = () => {
    setFilteredStatus("completed");
  };
  const handleShowNew = () => {
    setFilteredStatus("new");
  };
  const filteredList = todoList.filter(
    todoItem => filteredStatus === "all" || filteredStatus === todoItem.status
  );

  const handleSubmit = formValues => {
    const newTodoList = [...todoList];
    newTodoList.push(formValues);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo__container" style={{ textAlign: "center" }}>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todoList={filteredList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
