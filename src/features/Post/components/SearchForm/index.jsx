import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchForm.scss";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
SearchForm.defaultProps = {
  onSubmit: null,
};

function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = e => {
    if (onSubmit) {
      setSearchTerm(e.target.value);
      onSubmit(e.target.value);
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
