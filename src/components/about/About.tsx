import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import Typewriter from "typewriter-effect";
import { Button } from "../Button";
import { Link } from "../Link/Link";
import styled from "styled-components";
import {
  Description,
  MainTitle,
  Name,
  Photo,
  RegisterButtons,
} from "../../layout/sections/main/Main";
import { Theme } from "../../styles/Theme";

export const About = () => {
  return (
    <StyledAbout>
      <Photo />
      <FlexWrapper
        direction={"column"}
        justifyContent={"space-evenly"}
        gap={"25px"}
      >
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
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
          ipsum in justo vestibulum vulputate.
        </Description>
        <RegisterButtons>
          <Button>See Projects</Button>
          <Link>Download Resume</Link>
        </RegisterButtons>
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.article`
  display: flex;
  align-items: center;
  gap: 76px;
  flex-wrap: wrap;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);

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
