import styled from "styled-components";

export const Button = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(180px, 180px, 100%);
  height: 50px;
  padding: 0 20px;
  gap: 20px;
  background-color: var(--green);
  border-radius: 4px;
  border: 2px solid var(--green);
  margin: 0;
  line-height: var(--bodySize);
  font-size: var(--bodySize);
  cursor: pointer;
  transition: background-color 250ms ease-in;
  &:hover {
    background-color: white;
  }
`;
