import React from "react";
import CourseItem from "../CourseItem";
import "./style.scss";

function CourseList({ courseList }) {
  return (
    <div className="course">
      <h2 className="course__heading">Khoá học nổi bật</h2>
      <ul className="course__list">
        {courseList.map(courseItem => (
          <li className="course__item" key={courseItem.id}>
            <CourseItem courseItem={courseItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
