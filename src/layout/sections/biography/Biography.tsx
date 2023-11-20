import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import me from "../../../assets/images/photo_2023-10-23_15-19-26cut.jpg";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import Tilt from "react-parallax-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { font } from "../../../styles/Common";

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
    id: 1,
  },
  {
    title: "User experience development",
    pastTitle: "Development",
    description: "Delight the user and make it work.",
    type: "main",
    id: 2,
  },
  {
    title: "Interaction design ",
    pastTitle: "Development",
    description: "Use of different UI libraries",
    type: "main",
    id: 3,
  },
  {
    title: "Front-end developer",
    pastTitle: "Learning app “Memorization Cards",
    description: "02/2022 - present",
    type: "experience",
    id: 4,
  },
  {
    title: "Front-end developer",
    pastTitle: "Social project “Ta Na”",
    description: "08/2021 - 02/2022",
    type: "experience",
    id: 5,
  },
  {
    title: "Front-End Developer",
    pastTitle: "IT-Incubator",
    description: "2023 - present",
    type: "education",
    id: 6,
  },
  {
    title: "Software Engineer",
    pastTitle: "Belarusian National Technical University",
    description: "2019-2023",
    type: "education",
    id: 7,
  },
];

const skillsItems = [
  {
    text: "Creation Web apps using ReactJs with TypeScript and various libraries",
    id: 1,
  },
  { text: "Using Redux and Redux-toolkit to manage application state", id: 2 },
  {
    text: "Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and Design libraries",
    id: 3,
  },
  {
    text: "Implementation of multilingual application using localization management platform",
    id: 4,
  },
  {
    text: "Сheck the correctness of the code with Unit Tests and take Storybook for demonstration of individual modules of the application",
    id: 5,
  },
  {
    text: "Creation of applications with login and registration forms, as well as functionality with the ability to add, delete, change and filter data.",
    id: 6,
  },
];

export const Biography = () => {
  const [currentFilterStatus, setcurrentFilterStatus] = useState("main");

  const renderText = (filterType: string) => {
    if (currentFilterStatus === "skills") {
      return skillsItems.map((item) => (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={item.id}
        >
          <SkillsInfo key={item.id}>{item.text}</SkillsInfo>
        </motion.div>
      ));
    } else {
      return biographyItems
        .filter((info) => info.type === filterType)
        .map((item) => {
          return (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={item.id}
            >
              <BiographyInfo key={item.id}>
                <span>{item.title}</span> - {item.pastTitle}
                <p>{item.description}</p>
              </BiographyInfo>
            </motion.div>
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
        <SectionTitle sectionColor={"secondary"} pseudoColor={"secondary"}>
          ABOUT ME
        </SectionTitle>

        <FlexWrapper
          justifyContent={"space-around"}
          alignItems={"center"}
          wrap={"wrap-reverse"}
          gap={"25px"}
        >
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
              <AnimatePresence>
                {renderText(currentFilterStatus)}
              </AnimatePresence>
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
    width: 30%;
    background-color: ${Theme.colors.primary};
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;

    @media ${Theme.media.tablet} {
      width: 50%;
    }
  }
`;

const Information = styled.article`
  min-height: 968px;
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
    min-height: 100vh;
  }

  @media ${Theme.media.mobile} {
    border-radius: 110px 0;
    padding: 50px 30px 30px;
    min-height: 100vh;
  }
`;

const MeImg = styled.img.attrs(() => ({
  src: me,
  alt: "Me",
}))`
  max-width: 450px;
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h3`
  ${font({ color: Theme.colors.accent, weight: 700, Fmax: 60, Fmin: 34 })}

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
  ${font({
    color: Theme.colors.font.pramiary.light,
    family: "Kalameh, sans-serif",
    weight: 700,
    Fmax: 30,
    Fmin: 20,
  })}

  text-align: center;
`;

const CommonInformation = styled.p`
  //${font({ Fmax: 20, Fmin: 18 })}

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
