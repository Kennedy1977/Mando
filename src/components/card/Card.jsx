import React, { useState } from "react";
import {
  Container,
  IconContainer,
  ProgressStatus,
  Description,
  Accordion,
  AccordionHeader,
  AccordionContent,
} from "./styles";
import Css from "../../assets/css.svg";
import Html5 from "../../assets/css.svg";
import Tick from "../../assets/tick.svg";
import Arrows from "../../assets/arrows.svg";
import Javascript from "../../assets/javascript.svg";
import Thumb from "../../assets/thumb.svg";

function Card({ courseId, title, category, status, description, details }) {
  const [toggle, setToggle] = useState(false);
  const categoryColor = (category) => {
    switch (category.toUpperCase()) {
      case "HTML":
        return "#ec5840";
      case "CSS":
        return "#379ad6";
      case "JAVASCRIPT":
        return "#f8df1c";
      default:
        return "#666666";
    }
  };

  const showIcon = () => {
    switch (category.toUpperCase()) {
      case "HTML":
        return <Html5 />;
      case "CSS":
        return <Css />;
      case "JAVASCRIPT":
        return <Javascript />;
      default:
        return <Css />;
    }
  };

  const statusIcon = (status) => {
    switch (status.toUpperCase()) {
      case "COMPLETED":
        return (
          <>
            <Tick /> <span>Course Completed</span>
          </>
        );
      case "PROGRESS":
        return (
          <>
            <Thumb /> <span>In Progress</span>
          </>
        );
      case "UNSTARTED":
        return (
          <>
            <Thumb className="flip" /> <span>Not Started</span>
          </>
        );
      default:
        return (
          <>
            <Thumb className="flip" /> <span>Not Started</span>
          </>
        );
    }
  };

  return (
    <Container>
      <IconContainer categoryColor={categoryColor(category)}>
        {showIcon()}
      </IconContainer>

      <ProgressStatus>{statusIcon(status)}</ProgressStatus>
      <Description>
        <h2>{title}</h2>
        <p>{description}</p>
      </Description>
      <Accordion toggle={toggle}>
        <AccordionHeader onClick={() => setToggle(!toggle)}>
          <span>Course Details</span> <Arrows className={toggle && "flip"} />
        </AccordionHeader>
        <AccordionContent>
          {details.map((item) => (
            <li>{item}</li>
          ))}
        </AccordionContent>
      </Accordion>
    </Container>
  );
}

export default Card;
