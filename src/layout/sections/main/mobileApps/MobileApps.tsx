import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { App } from "../app/App.styled";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import vscode from "../../../../assets/images/Visual_Studio_Code_1.35_icon.svg.webp";
import webstorm from "../../../../assets/images/WebStorm_Icon.svg.webp";
import github from "../../../../assets/images/github-desktop-2021-05-20.webp";
import { Container } from "../../../../components/Container";

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

export const MobileApps = () => {
  return (
    <StyledMobileApps>
      <Container>
        <FlexWrapper gap={"13px"} wrap={"wrap"} justifyContent={"center"}>
          {appData.map((item) => {
            return <App title={item.title} imgSrc={item.imgSrc} />;
          })}
        </FlexWrapper>
      </Container>
    </StyledMobileApps>
  );
};

const StyledMobileApps = styled.section`
  display: none;
  background-color: ${Theme.colors.secondary};
  position: relative;

  &::after {
    content: "+";
    display: inline-block;
    color: ${Theme.colors.pseudo};
    background-color: transparent;
    position: absolute;
    z-index: -1;

    right: 20%;
    top: -144%;
    transform: rotate(-45deg);
    text-align: center;
    font-size: 150px;
    font-style: normal;
    font-weight: 600;

    @media ${Theme.media.tablet} {
      top: -167%;
    }

    @media ${Theme.media.mobile} {
      top: -210%;
    }
  }

  @media ${Theme.media.tablet} {
    display: block;
  }
`;
