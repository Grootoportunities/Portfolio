import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper
        alignItems={"center"}
        justifyContent={"space-evenly"}
        backgroundColor={"#A6BCFA"}
        width={"1158px"}
        height={"508px"}
      >
        <Photo />
        <div>
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
        </div>
      </FlexWrapper>
    </StyledMain>
  );
};

const RegisterButtons = styled.div`
  display: flex;
  gap: 32px;
`;

const Name = styled.h2``;

const MainTitle = styled.h1``;

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #fff;
  justify-content: center;
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
