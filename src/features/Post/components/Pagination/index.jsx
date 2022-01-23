import React from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";
import classNames from "classnames";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination({ pagination, onPageChange }) {
  const { _limit, _page, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  const addPaginationList = () => {
    const paginationList = [];
    for (let page = 1; page <= totalPage; page++) {
      const paginationItem = (
        <button
          key={page}
          className={classNames({
            post__btn: true,
            active: page === _page,
          })}
          onClick={() => {
            handlePageChange(page);
          }}
        >
          {page}
        </button>
      );
      paginationList.push(paginationItem);
    }
    return paginationList;
  };
  const handlePageChange = page => {
    if (onPageChange) {
      onPageChange(page);
    }
  };
  return (
    <div className="post__pagination">
      <button
        className="post__btn post__btn--prev"
        disabled={_page <= 1}
        onClick={() => {
          handlePageChange(_page - 1);
        }}
        style={
          _page === 1
            ? {
                pointerEvents: "none",
              }
            : {}
        }
      >
        Prev
      </button>
      {addPaginationList()}
      <button
        className="post__btn post__btn--next"
        disabled={_page === totalPage}
        onClick={() => {
          handlePageChange(_page + 1);
        }}
        style={
          _page >= totalPage
            ? {
                pointerEvents: "none",
              }
            : {}
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
