import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import portfolio from "../../../assets/images/portfolio.webp";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";

const projectData = [
  {
    title: "THIS PORTFOLIO",
    description:
      "My very first project that you are currently in. Designed using Styled Components library.",
    imgSrc: portfolio,
    codeLink: "https://github.com/Grootoportunities/Portfolio.git",
    projectLink: "#home",
    projectBtn: false,
  },
];

export const Projects: React.FC = () => {
  return (
    <S.Projects id={"projects"}>
      <Container>
        <SectionTitle sectionColor={"secondary"} pseudoColor={"secondary"}>
          MY PROJECTS
        </SectionTitle>
        <FlexWrapper
          justifyContent={"space-around"}
          gap={"40px"}
          wrap={"wrap"}
          alignItems={"stretch"}
        >
          {projectData.map((item) => {
            return (
              <Project
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                codeLink={item.codeLink}
                projectLink={item.projectLink}
                projectBtn={item.projectBtn}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
