import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>MY SKILLS</SectionTitle>
      <FlexWrapper wrap={"wrap"} justifyContent={"space-around"}>
        <Skill
          title="React"
          iconId="React"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
        <Skill
          title="Redux"
          iconId="Redux"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
        <Skill
          title="TypeScript"
          iconId="TypeScript"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
        <Skill
          title="JavaScript"
          iconId="JavaScript"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
        <Skill
          title="HTML5"
          iconId="HTML5"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
        <Skill
          title="CSS3"
          iconId="CSS3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
        <Skill
          title="Git"
          iconId="Git"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
        <Skill
          title="Styled Components"
          iconId="StyledComponents"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros
        in faucibus feugiat."
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #a5bbf8;
  min-height: 100vh;
`;
