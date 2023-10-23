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

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ImageWrapper>
        <Image src={props.imgSrc} alt={"Project"} />
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
      </ImageWrapper>
      <DescriptionWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </DescriptionWrapper>
    </StyledProject>
  );
};

const ProjectButtons = styled.div``;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    ${ProjectButtons} {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      border-radius: 26px 26px 0 0;
    }
  }

  ${ProjectButtons} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const DescriptionWrapper = styled.div`
  padding: 17px 33px 23px;
`;

const StyledProject = styled.article`
  background-color: ${Theme.colors.skill};
  max-width: 540px;
  width: 100%;
  border-radius: 26px;
  box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  //background-size: cover;
  border-radius: 26px 26px 0 0;
`;

const Title = styled.h3`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  margin: 14px 0 20px;
`;
