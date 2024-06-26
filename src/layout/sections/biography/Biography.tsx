import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import Tilt from "react-parallax-tilt";
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
    description: "Provide a joyful experience and ensure functionality",
    type: "main",
    id: 2,
  },
  {
    title: "Interaction design ",
    pastTitle: "Development",
    description: "Employing various UI toolkits",
    type: "main",
    id: 3,
  },
  {
    title: "Front-End Developer",
    pastTitle: "Todolist",
    description: "12/2023 - 05/2024",
    type: "experience",
    id: 5,
  },
  {
    title: "Front-End Developer",
    pastTitle: "Social Network",
    description: "12/2023 - 06/2024",
    type: "experience",
    id: 6,
  },
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
    id: 7,
  },
  {
    title: "Software Engineer",
    pastTitle: "Belarusian National Technical University",
    description: "2019-2023",
    type: "education",
    id: 8,
  },
];

const skillsItems = [
  {
    text: "Application development using React, RTK, TypeScript, JavaScript",
    id: 1,
  },
  {
    text: "Layout using CSS, Material UI, Styled Components",
    id: 2,
  },
  {
    text: "Making server-side requests with Ajax (REST-API)",
    id: 3,
  },
  {
    text: "Working with Figma and Swagger",
    id: 4,
  },
  {
    text: "Form management and data validation (React Hook Form, Redux Form, Formik)",
    id: 5,
  },
  {
    text: "Modernization and support of legacy code",
    id: 6,
  },
  {
    text: "Test support of the project",
    id: 7,
  },
  {
    text: "Improving application performance and optimization (useCallback, useMemo, React.Memo)",
    id: 8,
  },
  {
    text: "Code refactoring, minimizing code repetition, creating custom hooks and reusable components",
    id: 9,
  },
];

export const Biography: React.FC = () => {
  const [currentFilterStatus, setcurrentFilterStatus] = useState("main");

  const renderText = (filterType: string) => {
    if (currentFilterStatus === "skills") {
      return skillsItems.map((item) => (
        <S.SkillsInfo key={item.id}>{item.text}</S.SkillsInfo>
      ));
    } else {
      return biographyItems
        .filter((info) => info.type === filterType)
        .map((item) => {
          return (
            <S.BiographyInfo key={item.id}>
              <span>{item.title}</span> - {item.pastTitle}
              <p>{item.description}</p>
            </S.BiographyInfo>
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
                Hello! I am a Front-end developer since 1 year of development
                experience single page applications (SPA) with using React
                technologies, Redux, Typescript and others libraries. I work
                continuously on improving my professional skills and I plan to
                actively study NextJS, and I also pay attention to English
                language. Ready for feedback and ready discuss any promising
                offers!
              </S.CommonInformation>
              <TabMenu
                tabItems={tabItems}
                changeFilterStatus={changeFilterStatus}
                currentFilterStatus={currentFilterStatus}
              />
              {renderText(currentFilterStatus)}
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
