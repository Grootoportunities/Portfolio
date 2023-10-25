import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { Theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  imgSrc: string;
  title: string;
  description: string;
  backImg: string;
};

type StyledProjectPropsType = {
  backImg: string;
};

export const Project = (props: ProjectPropsType) => {
  // const { imgSrc, title, description, backImg } = props; todo: Деструктуризация!

  return (
    <StyledProject backImg={props.backImg}>
      <ProjectButtons>
        <FlexWrapper
          gap={"20px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button>VIEW CODE</Button>
          <Button>VIEW PROJECT</Button>
        </FlexWrapper>
      </ProjectButtons>
      <DescriptionWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </DescriptionWrapper>
    </StyledProject>
  );
};

const ProjectButtons = styled.div`
  margin: 100px 0 30px;

  ${Button} {
    padding: 20px 60px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 17px 33px 23px;
`;

const StyledProject = styled.article<StyledProjectPropsType>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 540px;
  width: 100%;
  border-radius: 26px;
  box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  z-index: 0;

  position: relative;

  &:hover {
    //max-width: 550px;
    //height: 520px; todo: Сделать так чтобы увелечение было из центра

    ${ProjectButtons} {
      opacity: 1;
    }

    background-image: linear-gradient(rgba(103, 138, 255, 0.47), rgb(0, 0, 0)),
      url(${(props) => props.backImg});

    &::before {
      content: "";
      display: inline-block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      border-radius: 26px;
      z-index: -1;
    }
  }

  ${ProjectButtons} {
    opacity: 0;
  }
`;

const Title = styled.h3`
  text-align: center;
  color: ${Theme.colors.secondary};
`;

const Description = styled.p`
  text-align: center;
  margin: 14px 0 20px;
  color: ${Theme.colors.skill};
`;
