import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { App } from "./app/App.styled";
import { Container } from "../../../components/Container";
import github from "../../../assets/images/apps/github-desktop-2021-05-20.webp";
import vscode from "../../../assets/images/apps/Visual_Studio_Code_1.35_icon.svg.webp";
import webstorm from "../../../assets/images/apps/WebStorm_Icon.svg.webp";
import postman from "../../../assets/images/apps/postman.webp";
import Typewriter from "typewriter-effect";
import { Button } from "../../../components/Button";
import { NavLink } from "../../../components/Link";
import { S } from "./Main_Styles";

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
  {
    title: "Postman",
    imgSrc: postman,
  },
];

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <S.About>
          <S.Photo />
          <S.InfoWrapper>
            <S.Name>
              I'm <span>Daniil Lameika</span>
            </S.Name>
            <S.MainTitle>
              <p>Front-End Developer</p>
              <Typewriter
                options={{
                  strings: ["Front-End Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </S.MainTitle>
            <S.MediaMainTitle>Front-End Developer</S.MediaMainTitle>
            <S.Description>
              Passionate front-end developer with a flair for crafting engaging
              user interfaces that provide users with an intuitive and efficient
              experience. Committed to writing clean, scalable code and staying
              abreast of the latest technologies in web development
            </S.Description>
            <S.RegisterButtons>
              <NavLink
                activeClass={"active"}
                smooth
                to={"projects"}
                spy
                offset={-10}
              >
                <Button>See Projects</Button>
              </NavLink>
              <S.Link
                href={"https://pbs.twimg.com/media/FThRkyLX0AEgFwg.jpg"}
                target={"_blank"}
              >
                Download Resume
              </S.Link>
            </S.RegisterButtons>
          </S.InfoWrapper>
        </S.About>
        <S.Apps>
          <FlexWrapper gap={"13px"}>
            {appData.map((item) => {
              return <App title={item.title} imgSrc={item.imgSrc} />;
            })}
          </FlexWrapper>
        </S.Apps>
      </Container>
    </S.Main>
  );
};
