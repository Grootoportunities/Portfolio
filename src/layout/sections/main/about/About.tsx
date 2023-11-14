import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import Typewriter from "typewriter-effect";
import { Button } from "../../../../components/Button";
import { NavLink } from "../../../../components/link/Link";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";
import photo from "../../../../assets/images/173543381_545605816406879_8761131686456400960_n-_1_.webp";

export const About = () => {
  return (
    <StyledAbout>
      <Photo />
      <FlexWrapper
        direction={"column"}
        justifyContent={"space-evenly"}
        gap={"25px"}
        wrap={"wrap"}
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
      </FlexWrapper>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            right: "50%",
            transform: "translate(-50%)",
          }}
        ></div>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.article`
  display: flex;
  align-items: center;
  gap: 76px;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  top: 188px;
  transform: translateX(-50%);

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primaryBlur} -6.76%,
    ${Theme.colors.secondaryBlur} 102.96%
  );

  border-radius: 200px 0;
  border: 2px solid ${Theme.colors.secondary};
  backdrop-filter: blur(4px);

  width: 80%;
  padding: 43px 11px 41px 104px;

  @media ${Theme.media.tablet} {
    gap: 25px;
    top: 125px;
    padding: 30px 0 86px;
    justify-content: center;
  }

  @media ${Theme.media.mobile} {
    border-radius: 110px 0;
    padding: 20px 160px 0;
  }
`;

const RegisterButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media ${Theme.media.mobile} {
    justify-content: space-between;
  }
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

  @media ${Theme.media.mobile} {
    display: none;
  }
`;

const MediaMainTitle = styled(MainTitle)`
  display: none;

  @media ${Theme.media.mobile} {
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
