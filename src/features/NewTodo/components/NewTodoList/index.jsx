import React from "react";
import PropTypes from "prop-types";
import NewTodoItem from "../NewTodoItem";

NewTodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
NewTodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function NewTodoList({ todoList, onTodoClick }) {
  return (
    <ul>
      {todoList.map(todoItem => (
        <NewTodoItem
          key={todoItem.id}
          todoItem={todoItem}
          onTodoClick={onTodoClick}
        />
      ))}
    </ul>
  );
}

export default NewTodoList;
