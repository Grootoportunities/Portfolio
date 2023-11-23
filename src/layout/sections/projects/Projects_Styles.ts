import styled, { css } from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import dots from "./../../../assets/images/dots.svg";

// Projects

const Projects = styled.section`
  background-color: ${Theme.colors.secondary};
  position: relative;
  z-index: 1;

  &::before {
    content: url(${dots});
    display: inline-block;

    position: absolute;
    z-index: 0;
    top: 85px;
    left: 127px;

    @media ${Theme.media.tablet} {
      display: none;
    }
  }

  &::after {
    content: "+";
    display: inline-block;
    transform: rotate(-45deg);
    color: rgba(33, 87, 242, 0.1);
    position: absolute;
    font-size: 550px;
    font-style: normal;
    font-weight: 600;
    line-height: 136%; /* 748px */
    right: 0;
    bottom: -200px;
    z-index: -1;

    @media ${Theme.media.tablet} {
      display: none;
    }
  }
`;

// Project

const ProjectButtons = styled.div`
  flex-grow: 1;

  ${Button} {
    padding: 20px 60px;
  }
`;

const DescriptionWrapper = styled.div`
  flex-grow: 1;
`;

const Project = styled.article<{ imgSrc: string }>`
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  gap: 60px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  min-height: 450px;

  flex-grow: 1;
  border-radius: 26px;
  box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.1);
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

  @media ${Theme.media.desktop} {
    max-width: 540px;
    min-height: 400px;
  }

  @media ${Theme.media.tablet} {
    min-height: 500px;

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

const Link = styled.a<{
  projectBtn?: boolean;
}>`
  ${(props) =>
    props.projectBtn === false &&
    css<{
      projectBtn?: boolean;
    }>`
      display: none;
    `}
`;

export const S = {
  Projects,
  ProjectButtons,
  DescriptionWrapper,
  Project,
  Title,
  Description,
  Link,
};
