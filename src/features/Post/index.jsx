import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import "./Post.scss";

function PostFeature() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const apiURL =
          "https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(apiURL);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPost(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPostList();
  }, []);
  return (
    <div className="post__container">
      <h1 className="post__heading">Post list</h1>
      <PostList posts={post} />
    </div>
  );
}

export default PostFeature;
