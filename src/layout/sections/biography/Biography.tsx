import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import Tilt from "react-parallax-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { S } from "./Biography_Styles";

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
    title: "Front-End Developer",
    pastTitle: "Development",
    description: "React / TypeScript",
    type: "main",
    id: 1,
  },
  {
    title: "User Experience Development",
    pastTitle: "Development",
    description: "Delight the user and make it work",
    type: "main",
    id: 2,
  },
  // {
  //   title: "Interaction design ",
  //   pastTitle: "Development",
  //   description: "Use of different UI libraries",
  //   type: "main",
  //   id: 3,
  // },
  {
    title: "Front-End Developer",
    pastTitle: "Portfolio",
    description: "10/2023 - 11/2023",
    type: "experience",
    id: 4,
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
  // { text: "Using Redux and Redux-toolkit to manage application state", id: 2 },
  {
    text: "Cross-browser, adaptive, responsive development with CSS-preprocessors",
    id: 3,
  },
  // {
  //   text: "Implementation of multilingual application using localization management platform",
  //   id: 4,
  // },
  // {
  //   text: "Сheck the correctness of the code with Unit Tests and take Storybook for demonstration of individual modules of the application",
  //   id: 5,
  // },
  // {
  //   text: "Creation of applications with login and registration forms, as well as functionality with the ability to add, delete, change and filter data.",
  //   id: 6,
  // },
];

export const Biography: React.FC = () => {
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
          <S.SkillsInfo key={item.id}>{item.text}</S.SkillsInfo>
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
              <S.BiographyInfo key={item.id}>
                <span>{item.title}</span> - {item.pastTitle}
                <p>{item.description}</p>
              </S.BiographyInfo>
            </motion.div>
          );
        });
    }
  };

  function changeFilterStatus(value: TabsStatusType) {
    setcurrentFilterStatus(value);
  }

  return (
    <S.Biography id={"about"}>
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
          <S.Information>
            <FlexWrapper direction={"column"} gap={"25px"}>
              <S.Name>Daniil Lameika</S.Name>
              <S.Stream>Front-End Developer</S.Stream>
              <S.CommonInformation>
                Hello. I’d describe myself as a goal-oriented and hardworking
                person with experience in creating SPA, usingReact(JS/TS),
                Redux, HTML & CSS. Now I am improving my skills in this
                direction and expanding them with new technologies.
              </S.CommonInformation>
              <TabMenu
                tabItems={tabItems}
                changeFilterStatus={changeFilterStatus}
                currentFilterStatus={currentFilterStatus}
              />
              <AnimatePresence>
                {renderText(currentFilterStatus)}
              </AnimatePresence>
            </FlexWrapper>
          </S.Information>
          <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="white"
            glarePosition="bottom"
            glareBorderRadius={"15px"}
          >
            <S.MeImg />
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Biography>
  );
};
