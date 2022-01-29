import React from "react";
import PropTypes from "prop-types";
import NewTodoItem from "../NewTodoItem";

NewTodoList.propTypes = {
  todoList: PropTypes.array,
};
NewTodoList.defaultProps = {
  todoList: [],
};

function NewTodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(todoItem => (
        <NewTodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
}

export default NewTodoList;
