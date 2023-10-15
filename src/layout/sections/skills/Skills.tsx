import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justifyContent={"space-around"}>
        <Skill
          title="HTML5"
          iconId="HTML5"
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
