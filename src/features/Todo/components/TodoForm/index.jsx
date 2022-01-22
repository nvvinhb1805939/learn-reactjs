import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleInput = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      id: Math.floor(Math.random() * 9999),
      action: value,
      status: "new",
    };
    onSubmit(formValues);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onInput={handleInput} />
    </form>
  );
}

export default TodoForm;
