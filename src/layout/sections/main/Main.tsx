import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { App } from "./app/App.styled";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import github from "../../../assets/images/github-desktop-2021-05-20.webp";
import vscode from "../../../assets/images/Visual_Studio_Code_1.35_icon.svg.webp";
import webstorm from "../../../assets/images/WebStorm_Icon.svg.webp";

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
        <FlexWrapper alignItems={"flex-end"} justifyContent={"flex-end"}>
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
  position: relative;
  z-index: -3;
  margin-top: 650px;

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
  }

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: -1;

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
    z-index: -3;
    left: 0;
    bottom: 0;

    @media ${Theme.media.tablet} {
      width: 50%;
    }
  }
`;
