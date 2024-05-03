import styled from "styled-components";

export const Container = styled("section")`
  display: grid;
  grid-auto-rows: max-content;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 30px;

  /* Tablet (768px) */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    gap: 20px;
  }
  /* Mobile (576px) */
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 10px;
  }
`;
