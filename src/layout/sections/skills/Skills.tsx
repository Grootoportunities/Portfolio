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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
  {
    title: "Redux",
    iconId: "Redux",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
  {
    title: "TypeScript",
    iconId: "TypeScript",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
  {
    title: "JavaScript",
    iconId: "JavaScript",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
  {
    title: "HTML5",
    iconId: "HTML5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
  {
    title: "CSS3",
    iconId: "CSS3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
  {
    title: "Git",
    iconId: "Git",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
  {
    title: "Styled Components",
    iconId: "StyledComponents",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros in faucibus feugiat.",
  },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle sectionColor={"primary"} pseudoColor={"primary"}>
          MY SKILLS
        </SectionTitle>
        <FlexWrapper wrap={"wrap"} justifyContent={"space-around"}>
          {skillData.map((item) => {
            return (
              <Skill title={item.title} iconId={item.iconId} text={item.text} />
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
