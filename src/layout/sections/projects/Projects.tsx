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

import counter from "../../../assets/images/projects/counter/counter.webp";
import counterWithRedux from "../../../assets/images/projects/counterWithRedux/counterWithRedux.webp";

import todolist from "../../../assets/images/projects/todolist/todolist.webp";

import socialNetwork from "../../../assets/images/projects/socialNetwork/socialNetwork.webp";

const projectData = [
  {
    title: "TODOLIST",
    description:
      "A streamlined task management app designed to help you organize your daily activities and boost productivity",
    imgSrc: todolist,
    imgSrc2x: todolist,
    imgSrc3x: todolist,
    imgSrc4x: todolist,
    codeLink: "https://github.com/Grootoportunities/todolist",
    projectLink: "https://grootoportunities.github.io/todolist",
    projectBtn: true,
  },
  {
    title: "SOCIAL NETWORK",
    description:
      "Connect and engage with friends and like-minded individuals on my Social Network app",
    imgSrc: socialNetwork,
    imgSrc2x: socialNetwork,
    imgSrc3x: socialNetwork,
    imgSrc4x: socialNetwork,
    codeLink: "https://github.com/Grootoportunities/Social-Network",
    projectLink: "https://grootoportunities.github.io/Social-Network",
    projectBtn: true,
  },
  {
    title: "PORTFOLIO",
    description:
      "My first project that you are currently in. Designed using Styled Components library",
    imgSrc: portfolio,
    imgSrc2x: portfolio2x,
    imgSrc3x: portfolio3x,
    imgSrc4x: portfolio4x,
    codeLink: "https://github.com/Grootoportunities/Portfolio.git",
    projectLink: "#home",
    projectBtn: false,
  },
  {
    title: "COUNTER WITH REDUX",
    description:
      "My experience of working with redux using the example of counter",
    imgSrc: counterWithRedux,
    imgSrc2x: counterWithRedux,
    imgSrc3x: counterWithRedux,
    imgSrc4x: counterWithRedux,
    codeLink: "https://github.com/Grootoportunities/counter-with-redux",
    projectLink: "https://grootoportunities.github.io/counter-with-redux/",
    projectBtn: true,
  },
  {
    title: "COUNTER",
    description: "Simple project with increasing and decreasing values",
    imgSrc: counter,
    imgSrc2x: counter,
    imgSrc3x: counter,
    imgSrc4x: counter,
    codeLink: "https://github.com/Grootoportunities/counter",
    projectLink: "https://grootoportunities.github.io/counter/",
    projectBtn: true,
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
