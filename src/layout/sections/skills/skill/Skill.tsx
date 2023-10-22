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
  color: ${Theme.colors.font.pramiary.dark};
  font-family: Kalameh, sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const StyledSkill = styled.article`
  margin: 20px;
  width: 120px;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 160px;
    height: 160px;
    background-color: #bccbf6;
    border-radius: 50px;

    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "";
    display: inline-block;
    width: 160px;
    height: 160px;
    background-color: ${Theme.colors.secondary};
    border-radius: 50px;

    position: absolute;
    z-index: -2;
    left: 50%;
    top: 50%;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(0);
    }

    &::after {
      transform: translate(-50%, -50%) scale(1);

      width: 200px;
      height: 200px;

      ${SkillTitle} {
        //color: ${Theme.colors.accent}; todo: Не работает на текст
        font-size: 30px;
      }
    }
  }
`;
