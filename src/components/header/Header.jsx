import React from "react";
import Avatar from "../../assets/avatar.svg";
import {
  AvatarContainer,
  Biography,
  CompletedStatus,
  Container,
  ModuleProgress,
  ProgressContainer,
  ProgressIndicator,
} from "./styles";

function Header({ name, username, bio, courses }) {
  const calculateProgress = () => {
    const courseCount = courses.length;
    const coursesCompleted = courses.filter(
      (course) => course.status === "completed"
    ).length;
    const progress = (coursesCompleted / courseCount) * 100;
    return progress.toFixed(0);
  };

  const moduleStatus = (status) =>
    courses.filter((course) => course.status === status).length;

  const courseProgress = calculateProgress();

  return (
    <Container>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <div>
        <h1>
          {name} (Your Username: {username})
        </h1>
        <Biography>{bio}</Biography>
        <ProgressContainer>
          <ProgressIndicator progress={courseProgress} />
        </ProgressContainer>
        <CompletedStatus>Completed {courseProgress}%</CompletedStatus>
        <ModuleProgress>{moduleStatus("completed")} Completed</ModuleProgress>
        <ModuleProgress>{moduleStatus("progress")} in Progress</ModuleProgress>
        <ModuleProgress>{moduleStatus("unstarted")} Remaining</ModuleProgress>
      </div>
    </Container>
  );
};

export default Header;