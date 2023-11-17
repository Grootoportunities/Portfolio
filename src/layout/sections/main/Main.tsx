import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { App } from "./app/App.styled";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import github from "../../../assets/images/github-desktop-2021-05-20.webp";
import vscode from "../../../assets/images/Visual_Studio_Code_1.35_icon.svg.webp";
import webstorm from "../../../assets/images/WebStorm_Icon.svg.webp";
import Typewriter from "typewriter-effect";
import { Button } from "../../../components/Button";
import { NavLink } from "../../../components/link/Link";
import { font } from "../../../styles/Common";
import photo from "../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";

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
    <StyledMain id={"home"}>
      <Container>
        <About>
          <Photo />
          <InfoWrapper>
            <Name>
              I'm <span>Daniil Lameika</span>
            </Name>
            <MainTitle>
              <p>Front-End Developer</p>
              <Typewriter
                options={{
                  strings: ["Front-End Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </MainTitle>
            <MediaMainTitle>Front-End Developer</MediaMainTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
              ipsum in justo vestibulum vulputate.
            </Description>
            <RegisterButtons>
              <Button>
                <NavLink
                  activeClass={"active"}
                  smooth
                  to={"projects"}
                  spy
                  offset={-10}
                >
                  See Projects
                </NavLink>
              </Button>
              <NavLink to={"#"}>Download Resume</NavLink>
            </RegisterButtons>
          </InfoWrapper>
        </About>
        <Apps>
          <FlexWrapper gap={"13px"}>
            {appData.map((item) => {
              return <App title={item.title} imgSrc={item.imgSrc} />;
            })}
          </FlexWrapper>
        </Apps>
      </Container>
    </StyledMain>
  );
};

const About = styled.article`
  display: flex;
  align-items: center;
  gap: 76px;
  flex-wrap: wrap;
  position: relative;

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primaryBlur} -6.76%,
    ${Theme.colors.secondaryBlur} 102.96%
  );

  border-radius: 200px 0;
  border: 2px solid ${Theme.colors.secondary};
  backdrop-filter: blur(4px);

  width: 100%;
  padding: 43px 11px 41px 104px;

  @media ${Theme.media.iPadAir} {
    justify-content: center;
    padding: 40px 0;
  }

  @media ${Theme.media.tablet} {
    gap: 25px;
    padding: 30px 50px 90px;
    justify-content: center;
    border-radius: 200px 0 110px 0;
  }

  @media ${Theme.media.mobile} {
    border-radius: 110px 0;
    padding: 20px 30px 50px 40px;
  }
`;

const RegisterButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Name = styled.h2`
  ${font({
    weight: 700,
    Fmax: 60,
    Fmin: 34,
    color: Theme.colors.font.pramiary.light,
  })}

  white-space: nowrap;

  span {
    color: ${Theme.colors.accent};
  }
`;

const MainTitle = styled.h1`
  ${font({
    color: Theme.colors.font.pramiary.light,
    weight: 700,
    Fmax: 60,
    Fmin: 30,
  })}

  white-space: nowrap;

  p {
    display: none;
  }

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const MediaMainTitle = styled(MainTitle)`
  display: none;

  @media ${Theme.media.tablet} {
    display: block;
  }
`;

const Description = styled.p`
  max-width: 376px;
  width: 100%;

  ${font({ Fmax: 20, Fmin: 11 })}

  @media ${Theme.media.tablet} {
    margin-bottom: 30px;
  }

  @media ${Theme.media.mobile} {
    margin-bottom: 0;
  }
`;

const Photo = styled.img.attrs(() => ({
  src: photo,
  alt: "Photo",
}))`
  max-width: 400px;
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 25px solid ${Theme.colors.secondary};

  @media ${Theme.media.tablet} {
    width: 335px;
    height: 335px;
  }

  @media ${Theme.media.mobile} {
    width: 190px;
    height: 190px;
    border: 14px solid ${Theme.colors.secondary};
  }
`;

const Apps = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: -3;

  margin-top: 50px;

  &::before {
    content: "+";
    display: inline-block;
    color: ${Theme.colors.pseudo};
    background-color: transparent;
    position: absolute;
    z-index: -4; //todo: Почему не заходит за артикль?

    bottom: 458%;
    left: -30%;
    transform: rotate(-45deg);
    text-align: center;
    font-size: 150px;
    font-style: normal;
    font-weight: 600;
  }

  &:last-child {
    margin-right: 130px;

    @media ${Theme.media.iPadAir} {
      margin-right: 0;
    }
  }

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;

  position: relative;
  padding-top: 188px;

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

    @media ${Theme.media.tablet} {
      right: 50px;
      bottom: 150px;
    }

    @media ${Theme.media.mobile} {
      right: 20px;
      bottom: 125px;

      width: 100px;
      height: 100px;
      border: 10px solid ${Theme.colors.pseudo};
    }
  }

  &::before {
    content: "";
    height: 100%;
    width: 30%;
    background-color: ${Theme.colors.primary};
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;

    @media ${Theme.media.tablet} {
      width: 50%;
    }
  }

  @media ${Theme.media.iPadAir} {
    padding: 115px 40px 40px;
  }

  @media ${Theme.media.tablet} {
    padding: 123px 100px 90px 80px;
  }

  @media ${Theme.media.mobile} {
    padding: 125px 10px 130px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  height: 100%;

  @media ${Theme.media.mobile} {
    align-items: center;
  }
`;
