import styled from "styled-components";

export const Container = styled("header")`
  display: flex;
  width: 100%;
  padding: 40px 20px;
  gap: 48px;
  margin-top: 30px;
  border: 1px solid var(--borderColor);
  border-radius: 4px;
`;
export const AvatarContainer = styled("div")`
  width: 100%;
  height: auto;
  max-width: 135px;
  color: black;
`;
export const Name = styled("h1")`
  font-size: var(--HeadingSize);
`;
export const Username = styled("p")``;

export const Biography = styled("p")``;

export const CompletedStatus = styled("h3")`
  font-size: var(--HeadingSize);
  margin: 24px 0;
`;

export const ModuleProgress = styled("h4")`
  font-size: var(--bodySize);
  &:not(:first-of-type) {
    line-height: 2;
  }
`;

export const ProgressContainer = styled("div")`
  display: flex;
  width: clamp(300px, 100%, 870px);
  height: 40px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
  align-items: center;
  padding: 0 16px;
`;

export const ProgressIndicator = styled("div")`
  display: flex;
  height: 16px;
  border-radius: 8px;
  background-color: #aadb1e;
  animation: showprogress 3s ease-out forwards;

  @keyframes showprogress {
    from {
      width: 0%;
    }
  
    to {
      width: ${(props) => props.progress}%;
    }
`;
