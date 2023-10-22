import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

const skillData = [
  {
    title: "React",
    iconId: "React",
    viewBox: "0 0 50 50",
  },
  {
    title: "Redux",
    iconId: "Redux",
    viewBox: "0 0 32 35",
  },
  {
    title: "TypeScript",
    iconId: "TypeScript",
    viewBox: "0 0 17 15",
  },
  {
    title: "JavaScript",
    iconId: "JavaScript",
    viewBox: "0 0 17 15",
  },
  {
    title: "HTML",
    iconId: "HTML5",
    viewBox: "0 0 25 25",
  },
  {
    title: "CSS",
    iconId: "CSS3",
    viewBox: "0 0 25 25",
  },
  {
    title: "Git",
    iconId: "Git",
    viewBox: "0 0 22 25",
  },
  {
    title: "Styled Components",
    iconId: "StyledComponents",
    viewBox: "0 0 41 41",
  },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle sectionColor={"primary"} pseudoColor={"primary"}>
          MY SKILLS
        </SectionTitle>
        <FlexWrapper
          wrap={"wrap"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"20px;"}
        >
          {skillData.map((item) => {
            return (
              <Skill
                title={item.title}
                iconId={item.iconId}
                viewBox={item.viewBox}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: ${Theme.colors.primary};
`;
