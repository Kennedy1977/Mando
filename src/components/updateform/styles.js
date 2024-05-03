import styled from "styled-components";

export const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 70px 50px;
  margin: 30px 0;
  border: 1px solid var(--borderColor);
  border-radius: 4px;
`;

export const FieldContainer = styled("fieldset")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonAlignmentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 0 1 440px;
  justify-content: flex-end;
  & button {
    margin-left: auto;
  }
`;

export const Error = styled("div")`
  font-size: var(--smallSize);
  font-weight: 700;
  color: var(--red);
  align-self: start;
`;
