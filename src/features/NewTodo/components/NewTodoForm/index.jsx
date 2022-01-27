import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
NewTodoForm.defaultProps = {
  onSubmit: null,
};

function NewTodoForm({ onSubmit }) {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const handleInputChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      const todo = {
        id: count,
        action: value,
        status: "new",
      };
      if (value.trim()) {
        onSubmit(todo);
        setCount(prevCount => prevCount + 1);
        setValue("");
        inputRef.current.focus();
      } else {
        alert("Dữ liệu không được để trống!");
        inputRef.current.focus();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter todo..."
        onChange={handleInputChange}
        ref={inputRef}
      />
      <input type="submit" value="Add" style={{ cursor: "pointer" }} />
    </form>
  );
}

export default NewTodoForm;
