import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { App } from "./app/App.styled";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import github from "../../../assets/images/github-desktop-2021-05-20.webp";
import vscode from "../../../assets/images/Visual_Studio_Code_1.35_icon.svg.webp";
import webstorm from "../../../assets/images/WebStorm_Icon.svg.webp";
import { Link } from "../../../components/Link/Link";
import { font } from "../../../styles/Common";
import Typewriter from "typewriter-effect";

const appData = [
  {
    title: "VS Code",
    imgSrc: vscode,
  },
  {
    title: "WebStorm",
    imgSrc: webstorm,
  },
  {
    title: "Github Desktop",
    imgSrc: github,
  },
];

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/*<About>*/}
          {/*  <Photo />*/}
          {/*  <FlexWrapper direction={"column"} justifyContent={"space-evenly"}>*/}
          {/*    <Name>*/}
          {/*      I'm <span>Daniil Lameika</span>*/}
          {/*    </Name>*/}
          {/*    <MainTitle>*/}
          {/*      <p>Front-End Developer</p>*/}
          {/*      <Typewriter*/}
          {/*        options={{*/}
          {/*          strings: ["Front-End Developer"],*/}
          {/*          autoStart: true,*/}
          {/*          loop: true,*/}
          {/*          delay: 100,*/}
          {/*        }}*/}
          {/*      />*/}
          {/*    </MainTitle>*/}
          {/*    <Description>*/}
          {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce*/}
          {/*      eu ipsum in justo vestibulum vulputate.*/}
          {/*    </Description>*/}
          {/*    <RegisterButtons>*/}
          {/*      <Button>See Projects</Button>*/}
          {/*      <Link>Download Resume</Link>*/}
          {/*    </RegisterButtons>*/}
          {/*  </FlexWrapper>*/}
          {/*</About>*/}
          <Apps>
            <FlexWrapper gap={"13px"}>
              {appData.map((item) => {
                return (
                  <App
                    // iconId={item.iconId}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    // viewBox={item.viewBox}
                  />
                );
              })}
            </FlexWrapper>
          </Apps>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const Apps = styled.div`
  align-self: flex-end;
  margin: 47px 258px 80px;
  position: relative;
  z-index: -3;

  &::before {
    content: "+";
    display: inline-block;
    color: ${Theme.colors.pseudo};
    background-color: transparent;
    position: absolute;
    z-index: -4; //todo: Почему не заходит за артикль?

    bottom: 576px;
    left: -50px;
    transform: rotate(-45deg);
    text-align: center;
    font-size: 150px;
    font-style: normal;
    font-weight: 600;
  }

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const About = styled.article`
  display: flex;
  align-items: center;
  gap: 76px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primaryBlur} -6.76%,
    ${Theme.colors.secondaryBlur} 102.96%
  );

  border-radius: 200px 0;
  border: 2px solid ${Theme.colors.secondary};
  backdrop-filter: blur(4px);
  max-width: 1158px;
  width: 100%;
  padding: 43px 11px 41px 104px;
  margin-top: 188px;

  @media ${Theme.media.tablet} {
    gap: 0;
    max-width: 590px;
    padding: 29px 51px 86px 76px;
    justify-content: center;
  }
`;

export const RegisterButtons = styled.div`
  display: flex;
  gap: 32px;
`;

export const Name = styled.h2`
  ${font({
    weight: 700,
    Fmax: 60,
    Fmin: 34,
    color: Theme.colors.font.pramiary.light,
  })}

  span {
    color: ${Theme.colors.accent};
  }
`;

export const MainTitle = styled.h1`
  ${font({
    color: Theme.colors.font.pramiary.light,
    weight: 700,
    Fmax: 60,
    Fmin: 34,
  })}

  p {
    display: none;
  }
`;

export const Description = styled.p`
  max-width: 376px;
  width: 100%;

  ${font({ Fmax: 20, Fmin: 11 })}
`;

export const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: -1;

  padding: 0;

  &::after {
    content: "";
    width: 152px;
    height: 152px;
    position: absolute;
    z-index: -2; //todo: тоже
    border: 20px solid ${Theme.colors.pseudo};
    border-radius: 50%;
    right: 156px;
    bottom: 242px;
  }

  &::before {
    content: "";
    height: 100%;
    width: 31%;
    background-color: ${Theme.colors.primary};
    position: absolute;
    z-index: -3;
    left: 0;
    bottom: 0;

    ${Theme.media.tablet} {
      width: 50vw;
    }
  }
`;

export const Photo = styled.img.attrs(() => ({
  src: photo,
  alt: "Photo",
}))`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 335px;
  border: 25px solid #fff;

  @media ${Theme.media.tablet} {
    width: 335px;
    height: 335px;
  }
`;
