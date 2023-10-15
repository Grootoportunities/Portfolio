import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <SkillTitle>{props.title}</SkillTitle>
      <Icon iconId={props.iconId} />
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
};

export const SkillTitle = styled.h3``;

export const SkillText = styled.p``;

export const StyledSkill = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 12px;
  width: 330px;
  background-color: #d9d9d9;
`;
