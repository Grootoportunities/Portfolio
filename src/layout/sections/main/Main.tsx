import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { App } from "./app/App.styled";

export const Main = () => {
  return (
    <StyledMain>
      <About>
        <Photo />
        <FlexWrapper direction={"column"} justifyContent={"space-between"}>
          <Name>I'm Daniil Lameika</Name>
          <MainTitle>A Web Developer</MainTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
            ipsum in justo vestibulum vulputate.
          </p>
          <RegisterButtons>
            <button>See Projects</button>
            <button>Download Resume</button>
          </RegisterButtons>
        </FlexWrapper>
      </About>
      <Apps>
        <FlexWrapper gap={"13px"}>
          <App iconId={"VSCode"} title={"VS Code"} />
          <App iconId={"WebStorm"} title={"WebStorm"} />
          <App iconId={"GithubDesktop"} title={"Github Desktop"} />
        </FlexWrapper>
      </Apps>
    </StyledMain>
  );
};

const Apps = styled.div`
  align-self: flex-end;
  margin-right: 258px;
`;

const About = styled.article`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #a6bcfa;
  width: 1158px;
  padding: 42px 130px 40px 104px;
`;

const RegisterButtons = styled.div`
  display: flex;
  gap: 32px;
`;

const Name = styled.h2``;

const MainTitle = styled.h1``;

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  justify-content: space-evenly;
  align-items: center;
`;

const Photo = styled.img.attrs(() => ({
  src: photo,
  alt: "Photo",
}))`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;
