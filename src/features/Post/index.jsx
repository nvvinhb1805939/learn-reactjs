import querystring from "query-string";
import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import SearchForm from "./components/SearchForm";
import "./Post.scss";

function PostFeature() {
  console.log("re-rednder");
  const [post, setPost] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState(() => {
    const newFilter = {
      _limit: 10,
      _page: 1,
      title_like: "",
    };
    const lastFilter = JSON.parse(localStorage.getItem("newFilter"));
    return lastFilter || newFilter;
  });
  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const queryString = querystring.stringify(filter);
        const apiURL = `https://js-post-api.herokuapp.com/api/posts?_limit=${queryString}`;
        const response = await fetch(apiURL);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPost(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
        alert(error.messag);
      }
    };
    fetchPostList();
  }, [filter]);
  const handlePageChange = page => {
    const newFilter = { ...filter, _page: page };
    setFilter(newFilter);
    if (newFilter["title_like"] === "") {
      localStorage.setItem("newFilter", JSON.stringify(newFilter));
    }
  };
  const handleSearchTermChange = value => {
    const newFilter = {
      ...filter,
      _page: 1,
      title_like: value,
    };
    setFilter(newFilter);
  };

  return (
    <div className="post__container">
      <h1 className="post__heading">Post list</h1>
      <SearchForm onSubmit={handleSearchTermChange} />
      <PostList posts={post} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default PostFeature;
