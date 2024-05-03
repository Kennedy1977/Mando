import React from "react";
import { Container } from "./styles";
import { Button } from "../shared.styles";

function FilterBar({ setCourseType }) {
  return (
    <Container>
      <Button onClick={() => setCourseType("")}>Show All</Button>
      <Button onClick={() => setCourseType("HTML")}>HTML</Button>
      <Button onClick={() => setCourseType("JAVASCRIPT")}>JavaScript</Button>
      <Button onClick={() => setCourseType("CSS")}>CSS</Button>
    </Container>
  );
}

export default FilterBar;
