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
        <FlexWrapper
          gap={"13px"}
          wrap={"wrap"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
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
  @media ${Theme.media.tablet} {
    display: block;
  }
`;
