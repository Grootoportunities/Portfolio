import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import me from "../../../assets/images/photo_2023-10-23_15-19-26cut.jpg";
import { TabMenu } from "./tabMenu/TabMenu";

const tabItems = ["Main Skills", "Skills", "Experience", "Education"];

export const Biography = () => {
  return (
    <StyledBiography>
      <Container>
        <SectionTitle sectionColor={"secondary"} pseudoColor={"primary"}>
          ABOUT ME
        </SectionTitle>
        <FlexWrapper justifyContent={"space-around"} alignItems={"center"}>
          <Information>
            <FlexWrapper direction={"column"} gap={"25px"}>
              <Name>Daniil Lameika</Name>
              <Stream>Front-End Developer</Stream>
              <CommonInformation>
                Hello. I’d describe myself as a goal-oriented and hardworking
                person with experience in creating SPA, usingReact(JS/TS),
                Redux, HTML & CSS. Now I am improving my skills in this
                direction and expanding them with new technologies.
              </CommonInformation>
              <TabMenu tabItems={tabItems} />
              <EducationInfo>
                <span>Front-End Developer</span> - IT-Incubator{" "}
                <div>2023 - present</div>
              </EducationInfo>
              <EducationInfo>
                <span>Software Engineer</span> - Belarusian National Technical
                University <div>2019-2023</div>
              </EducationInfo>
            </FlexWrapper>
          </Information>
          <MeImg />
        </FlexWrapper>
      </Container>
    </StyledBiography>
  );
};

const StyledBiography = styled.section`
  background-color: ${Theme.colors.secondary};

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    height: 100%;
    width: 430px;
    background-color: ${Theme.colors.primary};
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
  }
`;

const Information = styled.article`
  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primary},
    ${Theme.colors.secondary}
  );

  border-radius: 200px 0;
  border: 2px solid #bfcbf6;
  backdrop-filter: blur(4px);
  padding: 75px 30px 65px 60px;
`;

const MeImg = styled.img.attrs(() => ({
  src: me,
  alt: "Me",
}))`
  height: 600px;
  border-radius: 15px;
  box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.2);

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const Name = styled.h3`
  color: ${Theme.colors.accent};
  font-size: 60px;
  font-weight: 700;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: currentColor;

    position: absolute;
    bottom: -10px;
  }
`;

const Stream = styled.h4`
  text-align: center;
  color: ${Theme.colors.font.pramiary.light};
  font-family: Kalameh, sans-serif;
  font-size: 30px;
  font-weight: 700;
`;

const CommonInformation = styled.p`
  max-width: 700px;
  width: 100%;
`;

const EducationInfo = styled(CommonInformation)`
  span {
    font-weight: bold;
  }
`;
