import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string;
  title: string;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Icon iconId={props.iconId} viewBox={props.viewBox} />
        <SkillTitle>{props.title}</SkillTitle>
      </FlexWrapper>
    </StyledSkill>
  );
};

export const SkillTitle = styled.h3`
  text-align: center;
  color: ${Theme.colors.secondary};
  font-family: Kalameh, sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const StyledSkill = styled.article`
  margin: 60px 120px;
  width: 120px;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: transparent;
    border: 10px solid white;
    border-radius: 50%;

    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
