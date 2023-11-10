import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { Theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  imgSrc: string;
  title: string;
  description: string;
};

type StyledProjectPropsType = {
  imgSrc: string;
};

export const Project = (props: ProjectPropsType) => {
  // const { imgSrc, title, description, backImg } = props; todo: Деструктуризация!

  return (
    <StyledProject imgSrc={props.imgSrc}>
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
    url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 540px;
  width: 100%; //330px не получается :c
  flex-grow: 1;
  border-radius: 26px;
  box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.1);
  //height: 100%;
  z-index: 0;

  position: relative;

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
    opacity: 0;
    transition: ${Theme.animations.transitions.regular};
  }

  &:hover {
    //max-width: 550px;
    //height: 520px; todo: Сделать так чтобы увелечение было из центра

    ${ProjectButtons} {
      opacity: 1;
      transition: ${Theme.animations.transitions.regular};
    }

    background-image: linear-gradient(rgba(103, 138, 255, 0.47), rgb(0, 0, 0)),
      url(${(props) => props.imgSrc});

    &::before {
      opacity: 1;
    }
  }

  ${ProjectButtons} {
    opacity: 0;
    transition: ${Theme.animations.transitions.regular};
  }

  ${Theme.media.desktop} {
    //max-width: 540px; todo: Не получается для десктопов :c
  }

  ${Theme.media.tablet} {
    //todo: Какого хуя не работаешь??????
    ${ProjectButtons} {
      opacity: 1;
    }

    background-image: linear-gradient(rgba(103, 138, 255, 0.47), rgb(0, 0, 0)),
      url(${(props) => props.imgSrc});

    &::before {
      opacity: 1;
    }
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
