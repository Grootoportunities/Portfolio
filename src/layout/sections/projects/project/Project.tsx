import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType,
) => {
  return (
    <S.Project imgSrc={props.imgSrc}>
      <S.ProjectButtons>
        <FlexWrapper
          gap={"20px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button>VIEW CODE</Button>
          <Button>VIEW PROJECT</Button>
        </FlexWrapper>
      </S.ProjectButtons>
      <S.DescriptionWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
      </S.DescriptionWrapper>
    </S.Project>
  );
};
