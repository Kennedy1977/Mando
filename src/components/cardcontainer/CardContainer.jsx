import React from "react";
import Card from "../card/Card";
import { Container } from "./styles";

function CardContainer({ data, courseType }) {
  const filterCoursesByType = () => {
    if (courseType === "") return data.courses;
    return data.courses.filter(
      (course) => course.category.toUpperCase() === courseType
    );
  };

  const showCourseCards = () => {
    const courseData = filterCoursesByType();
    return courseData.map((course) => (
      <React.Fragment key={course.courseId}>
        <Card {...course} />
      </React.Fragment>
    ));
  };

  return <Container>{showCourseCards()}</Container>;
}

export default CardContainer;
