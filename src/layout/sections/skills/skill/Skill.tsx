import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} alignItems={"center"}>
        <SkillTitle>{props.title}</SkillTitle>
        <Icon iconId={props.iconId} />
        <SkillText>{props.text}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

export const SkillTitle = styled.h3``;

export const SkillText = styled.p`
  text-align: center;
`;

export const StyledSkill = styled.article`
  margin: 58px 12px;
  width: 330px;
  padding: 62px 20px 40px;
  background-color: ${Theme.colors.skill};
`;
