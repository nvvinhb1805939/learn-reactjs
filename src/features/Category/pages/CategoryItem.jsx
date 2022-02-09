import React from 'react';
import PropTypes from 'prop-types';

CategoryItem.propTypes = {
  name: PropTypes.string,
};
CategoryItem.defaultProps = {
  name: '',
};

CategoryItem.propTypes = {};

function CategoryItem({ name }) {
  return <li>{name}</li>;
}

export default CategoryItem;
