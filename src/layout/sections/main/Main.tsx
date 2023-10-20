import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { App } from "./app/App.styled";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

const appData = [
  {
    iconId: "VSCode",
    title: "VS Code",
    viewBox: "0 0 100 100",
  },
  {
    iconId: "WebStorm",
    title: "WebStorm",
    viewBox: "0 0 250 250",
  },
  {
    iconId: "GithubDesktop",
    title: "Github Desktop",
    viewBox: "0 0 20 20",
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
          <About>
            <Photo />
            <FlexWrapper direction={"column"} justifyContent={"space-evenly"}>
              <Name>I'm</Name>
              <MainTitle>A Web Developer</MainTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eu ipsum in justo vestibulum vulputate.
              </Description>
              <RegisterButtons>
                <Button>See Projects</Button>
                <Button>Download Resume</Button>
              </RegisterButtons>
            </FlexWrapper>
          </About>
          <Apps>
            <FlexWrapper gap={"90px"}>
              {appData.map((item) => {
                return (
                  <App
                    iconId={item.iconId}
                    title={item.title}
                    viewBox={item.viewBox}
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
  margin: 80px 258px;
`;

const About = styled.article`
  display: flex;
  justify-content: space-between;
  //align-items: center;

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primary} -6.76%,
    #dce6ff 102.96%
  );
  border-radius: 200px 0;
  border: 2px solid #fff;
  backdrop-filter: blur(10px);

  max-width: 1158px;
  width: 100%;
  padding: 43px 130px 41px 104px;
  margin-top: 188px;

  position: relative;
  z-index: 0;

  &::before {
    content: "+";
    display: inline-block;
    color: ${Theme.colors.pseudo};
    background-color: transparent;
    position: absolute;
    z-index: -1; //todo: Почему не заходит за артикль?

    bottom: 86%;
    left: 372px;
    transform: rotate(-45deg);
    text-align: center;
    font-size: 150px;
    font-style: normal;
    font-weight: 600;
  }

  &::after {
    content: "";
    width: 152px;
    height: 152px;
    position: absolute;
    z-index: -1; //todo: тоже
    border: 20px solid ${Theme.colors.pseudo};
    border-radius: 50%;
    right: 25px;
    bottom: -9px;
  }
`;

const RegisterButtons = styled.div`
  display: flex;
  gap: 32px;
  //margin: 42px 0 74px 0;
`;

const Name = styled.h2`
  color: ${Theme.colors.font.pramiary.light};
  font-size: 60px;
  font-weight: 700;

  &::after {
    content: " Daniil Lameika";
    color: ${Theme.colors.accent};
  }
`;

const MainTitle = styled.h1`
  color: ${Theme.colors.font.pramiary.light};
  font-size: 60px;
  font-weight: 700;
  margin: 19px 0;
`;

const Description = styled.p`
  color: ${Theme.colors.font.pramiary.light};

  /* Body/Main */

  font-size: 20px;
  //todo: Почему удаляем font-style если он не прописан в глобальных стилях?
  font-weight: 400;

  max-width: 376px;
  width: 100%;
`;

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #fff;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    height: 100%;
    width: 468px;

    background-color: ${Theme.colors.primary};
    position: absolute;
    z-index: -1;
    left: 0;
  }
`;

const Photo = styled.img.attrs(() => ({
  src: photo,
  alt: "Photo",
}))`
  width: 400px;
  height: 400px;
  object-fit: cover;

  border-radius: 334px;
  border: 25px solid #fff;
`;
