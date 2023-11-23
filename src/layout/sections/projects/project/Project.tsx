import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  imgSrc: string;
  imgSrc2x?: string;
  imgSrc3x?: string;
  imgSrc4x?: string;
  title: string;
  description: string;
  codeLink: string;
  projectLink: string;
  projectBtn?: boolean;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType,
) => {
  return (
    <S.Project
      imgSrc={props.imgSrc}
      imgSrc2x={props.imgSrc2x}
      imgSrc3x={props.imgSrc3x}
      imgSrc4x={props.imgSrc4x}
    >
      <S.ProjectButtons>
        <FlexWrapper
          gap={"20px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <S.Link href={props.codeLink} target={"_blank"}>
            <Button>VIEW CODE</Button>
          </S.Link>
          <S.Link
            href={props.projectLink}
            target={"_blank"}
            projectBtn={props.projectBtn}
          >
            <Button>VIEW PROJECT</Button>
          </S.Link>
        </FlexWrapper>
      </S.ProjectButtons>
      <S.DescriptionWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
      </S.DescriptionWrapper>
    </S.Project>
  );
};
