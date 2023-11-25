import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";
import { Project } from "./project/Project";

import portfolio from "../../../assets/images/projects/portfolio/portfolio.webp";
import portfolio2x from "./../../../assets/images/projects/portfolio/portfolio@2x.webp";
import portfolio3x from "./../../../assets/images/projects/portfolio/portfolio@3x.webp";
import portfolio4x from "./../../../assets/images/projects/portfolio/portfolio@4x.webp";

const projectData = [
  {
    title: "PORTFOLIO",
    description:
      "My very first project that you are currently in. Designed using Styled Components library.",
    imgSrc: portfolio,
    imgSrc2x: portfolio2x,
    imgSrc3x: portfolio3x,
    imgSrc4x: portfolio4x,
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
                imgSrc2x={item.imgSrc2x}
                imgSrc3x={item.imgSrc3x}
                imgSrc4x={item.imgSrc4x}
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
