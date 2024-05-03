import styled from "styled-components";

export const Container = styled("nav")`
  display: flex;
  width: 100%;
  padding: 40px 20px;
  gap: 48px;
  margin-top: 30px;
  border-radius: 4px;

  @media (max-width: 768px) {
    gap: 24px;
    padding: 20px 10px;
  }

  @media (max-width: 576px) {
    gap: 12px;
    padding: 0;
  }
`;
