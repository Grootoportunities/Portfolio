import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
  viewBox?: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Icon iconId={props.iconId} viewBox={props.viewBox} />
        <S.SkillTitle>{props.title}</S.SkillTitle>
      </FlexWrapper>
    </S.Skill>
  );
};
