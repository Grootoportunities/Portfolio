import React from "react";
import { App } from "../app/App.styled";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import vscode from "../../../../assets/images/apps/Visual_Studio_Code_1.35_icon.svg.webp";
import webstorm from "../../../../assets/images/apps/WebStorm_Icon.svg.webp";
import github from "../../../../assets/images/apps/github-desktop-2021-05-20.webp";
import { Container } from "../../../../components/Container";
import { S } from "../Main_Styles";

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

export const MobileApps: React.FC = () => {
  return (
    <S.MobileApps>
      <Container>
        <FlexWrapper gap={"13px"} wrap={"wrap"} justifyContent={"center"}>
          {appData.map((item) => {
            return <App title={item.title} imgSrc={item.imgSrc} />;
          })}
        </FlexWrapper>
      </Container>
    </S.MobileApps>
  );
};
