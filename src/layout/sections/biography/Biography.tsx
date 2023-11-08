import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import me from "../../../assets/images/photo_2023-10-23_15-19-26cut.jpg";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import Tilt from "react-parallax-tilt";

const tabItems: Array<{
  title: string;
  status: TabsStatusType;
}> = [
  { title: "Main Skills", status: "main" },
  { title: "Skills", status: "skills" },
  { title: "Experience", status: "experience" },
  { title: "Education", status: "education" },
];

const biographyItems = [
  {
    title: "Front-end developer",
    pastTitle: "Development",
    description: "React / Redux / Type Script",
    type: "main",
  },
  {
    title: "User experience development",
    pastTitle: "Development",
    description: "Delight the user and make it work.",
    type: "main",
  },
  {
    title: "Interaction design ",
    pastTitle: "Development",
    description: "Use of different UI libraries",
    type: "main",
  },
  {
    title: "Front-end developer",
    pastTitle: "Learning app “Memorization Cards",
    description: "02/2022 - present",
    type: "experience",
  },
  {
    title: "Front-end developer",
    pastTitle: "Social project “Ta Na”",
    description: "08/2021 - 02/2022",
    type: "experience",
  },
  {
    title: "Front-End Developer",
    pastTitle: "IT-Incubator",
    description: "2023 - present",
    type: "education",
  },
  {
    title: "Software Engineer",
    pastTitle: "Belarusian National Technical University",
    description: "2019-2023",
    type: "education",
  },
];

const skillsItems = [
  "Creation Web apps using ReactJs with TypeScript and various libraries",
  "Using Redux and Redux-toolkit to manage application state",
  "Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and Design libraries",
  "Implementation of multilingual application using localization management platform",
  "Сheck the correctness of the code with Unit Tests and take Storybook for demonstration of individual modules of the application",
  "Creation of applications with login and registration forms, as well as functionality with the ability to add, delete, change and filter data.",
];

export const Biography = () => {
  const [currentFilterStatus, setcurrentFilterStatus] = useState("main");

  const renderText = (filterType: string) => {
    if (currentFilterStatus === "skills") {
      return skillsItems.map((item) => <SkillsInfo>{item}</SkillsInfo>);
    } else {
      return biographyItems
        .filter((info) => info.type === filterType)
        .map((item) => {
          return (
            <BiographyInfo>
              <span>{item.title}</span> - {item.pastTitle}
              <p>{item.description}</p>
            </BiographyInfo>
          );
        });
    }
  };

  function changeFilterStatus(value: TabsStatusType) {
    setcurrentFilterStatus(value);
  }

  return (
    <StyledBiography id={"about"}>
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
              <TabMenu
                tabItems={tabItems}
                changeFilterStatus={changeFilterStatus}
                currentFilterStatus={currentFilterStatus}
              />
              {renderText(currentFilterStatus)}
            </FlexWrapper>
          </Information>
          <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="white"
            glarePosition="bottom"
            glareBorderRadius={"15px"}
          >
            <MeImg />
          </Tilt>
        </FlexWrapper>
      </Container>
    </StyledBiography>
  );
};

const StyledBiography = styled.section`
  position: relative;

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
  min-height: 967px;
  height: 100%;

  background-image: linear-gradient(
    147deg,
    ${Theme.colors.primary},
    ${Theme.colors.secondary}
  );

  border-radius: 200px 0;
  border: 2px solid #bfcbf6;
  backdrop-filter: blur(4px);
  padding: 75px 30px 65px 60px;

  @media ${Theme.media.tablet} {
    display: none;
  }
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

const BiographyInfo = styled(CommonInformation)`
  span {
    font-weight: bold;
  }
`;

const SkillsInfo = styled(CommonInformation)`
  font-weight: bold;
`;
