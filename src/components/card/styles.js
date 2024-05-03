import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex: 1 0 20%;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  border: 1px solid var(--borderColor);
  border-radius: 4px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }

  @media (max-width: 576px) {
    &:not(:first-of-type) {
      margin-top: 0;
    }
  }
`;

export const IconContainer = styled("div")`
  display: flex;
  width: 70px;
  padding: 30px 0;

  color: ${(props) => props.categoryColor};
`;

export const ProgressStatus = styled("div")`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  height: 40px;
  padding-left: 20px;

  & > svg {
    color: var(--green);
    width: 20px;
    height: auto;
  }
`;

export const Description = styled("div")`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;
  padding: 25px 20px 25px;
  background-color: var(--lightGrey);
`;

export const Accordion = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  max-height: ${(props) => (props.toggle ? "500px" : "36px")};
`;

export const AccordionHeader = styled("div")`
  display: flex;
  width: 100%;
  min-height: 36px;
  padding: 0 20px;
  cursor: pointer;
  color: var(--white);
  background-color: var(--darkGrey);
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  & > svg {
    width: 10px;
    height: auto;
  }
`;
export const AccordionContent = styled("ul")`
  padding: 20px;
  font-weight: 700;
  & li {
    margin-left: 20px;
  }
`;
