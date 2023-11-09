import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { font } from "../../../../styles/Common";

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
  font-size: 20px;

  ${font({
    color: Theme.colors.font.pramiary.dark,
    family: "Kalameh, sans-serif",
    weight: 700,
  })}
`;

export const StyledSkill = styled.article`
  margin: 20px;
  width: 90px;
  flex-grow: 1;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 160px;
    height: 160px;
    background-color: #bccbf6;
    border-radius: 50px;
    box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.1);

    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media ${Theme.media.tablet} {
      width: 130px;
      height: 130px;
    }
  }
  }

  @media ${Theme.media.tablet} {
    width: 60px;
  }
`;
