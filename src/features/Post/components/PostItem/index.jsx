import React from "react";
import PropTypes from "prop-types";
import "./PostItem.scss";

PostItem.propTypes = {
  post: PropTypes.object,
};
PostItem.defaultProps = {
  post: {},
};

function PostItem({ post }) {
  const { title, author, description, imageUrl } = post;
  return (
    <a href="." className="post__link">
      <img src={imageUrl} alt="img" className="post__img" />
      <div className="post__content">
        <h3 className="post__title">{title}</h3>
        <h4 className="post__author">{author}</h4>
        <p className="post__desc">{description}</p>
      </div>
    </a>
  );
}

export default PostItem;
