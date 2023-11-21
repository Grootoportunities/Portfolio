import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";

type StyledProjectPropsType = {
  imgSrc: string;
};

// Projects

const Projects = styled.section`
  background-color: ${Theme.colors.secondary};
  position: relative;
  z-index: 1;

  // &::before {
  //   content: url(../../../../public/assets/svg/dots.svg);
  //   display: inline-block;
  //   width: 413px;
  //   height: 505px;
  //
  //   position: absolute;
  //   z-index: -1;
  //   top: 85px;
  //   left: 127px;
  // }
  //
  // &::after {
  //   content: "+";
  //   display: inline-block;
  //   transform: rotate(-45deg);
  //   color: rgba(33, 87, 242, 0.1);
  //   position: absolute;
  //   text-align: center;
  //   font-family: Roboto;
  //   font-size: 550px;
  //   font-style: normal;
  //   font-weight: 600;
  //   line-height: 136%; /* 748px */
  //   right: 0;
  //   bottom: 0;
  //   z-index: -1;
  //   position: absolute;
  // }
  //
  // @media ${Theme.media.tablet} {
  //   &::before,
  //   &::after {
  //     display: none;
  //   }
  // }
`;

// Project

const ProjectButtons = styled.div`
  margin: 100px 0 30px;

  ${Button} {
    padding: 20px 60px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 17px 33px 23px;
`;

const Project = styled.article<StyledProjectPropsType>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%; //330px; todo: Не работает с флекс гроу, разобраться

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
    max-width: 540px; //todo: Не получается для десктопов :c
  }

  @media ${Theme.media.tablet} {
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

export const S = {
  Projects,
  ProjectButtons,
  DescriptionWrapper,
  Project,
  Title,
  Description,
};
