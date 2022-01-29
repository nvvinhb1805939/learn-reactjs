import React, { useContext } from "react";
import { HandleTodoClickContext } from "../../index";
import PropTypes from "prop-types";

NewTodoItem.propTypes = {
  todoItem: PropTypes.object,
};
NewTodoItem.defaultProps = {
  todoItem: {},
};

function NewTodoItem({ todoItem }) {
  const { action } = todoItem;
  const onTodoClick = useContext(HandleTodoClickContext);
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
