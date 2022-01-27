import React from "react";
import PropTypes from "prop-types";

NewTodoItem.propTypes = {
  todoItem: PropTypes.object,
  onTodoClick: PropTypes.func,
};
NewTodoItem.defaultProps = {
  todoItem: {},
  onTodoClick: null,
};

function NewTodoItem({ todoItem, onTodoClick }) {
  const { action } = todoItem;
  const handleTodoClick = e => {
    const parentNode = e.target.parentNode;
    const innertText = parentNode.innerText;
    onTodoClick(innertText);
  };
  return (
    <li>
      {action}
      <span
        style={{ marginLeft: "20px", cursor: "pointer" }}
        onClick={handleTodoClick}
      >
        X
      </span>
    </li>
  );
}

export default NewTodoItem;
