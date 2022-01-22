import React from "react";
import PropTypes from "prop-types";
import PostItem from "../PostItem";
import "./PostList.scss";

PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};

function PostList({ posts }) {
  return (
    <ul className="post__list">
      {posts.map(post => (
        <li key={post.id} className="post__item">
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostList;
