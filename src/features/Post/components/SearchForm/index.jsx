import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import "./SearchForm.scss";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
SearchForm.defaultProps = {
  onSubmit: null,
};

function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    if (onSubmit) {
      typingTimeoutRef.current = setTimeout(() => {
        onSubmit(e.target.value);
      }, 300);
    }
  };
  return (
    <div className="post__form-container">
      <form className="post__form">
        <div className="post__field">
          <input
            type="text"
            value={searchTerm}
            className="post__input"
            onChange={handleSearchTermChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
