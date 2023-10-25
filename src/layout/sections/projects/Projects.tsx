import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import socialIMG from "./../../../assets/images/social-networking-184313840_384936-_1_.webp";
import todolist from "./../../../assets/images/hand-drawn-essay-illustration_23-2150292643-_1_.webp";
import counter from "./../../../assets/images/smart-home-app_23-2148620419-_1_.webp";
import memorizingGame from "./../../../assets/images/animal-memory-card-game_1308-113025-_1_.webp";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

const projectData = [
  {
    title: "SOCIAL NETWORK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel volutpat lacus, a tempor ligula. Fusce congue pulvinar imperdiet. Aenean malesuada, augue eu efficitur vestibulum, est ipsum gravida arcu, non fringilla velit nisl vitae enim.",
    imgSrc: socialIMG,
    backImg: "/assets/images/social-networking-184313840_384936-_1_.webp",
  },
  {
    title: "TODOLIST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel volutpat lacus, a tempor ligula. Fusce congue pulvinar imperdiet. Aenean malesuada, augue eu efficitur vestibulum, est ipsum gravida arcu, non fringilla velit nisl vitae enim.",
    imgSrc: todolist,
    backImg:
      "/assets/images/hand-drawn-essay-illustration_23-2150292643-_1_.webp",
  },
  {
    title: "COUNTER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel volutpat lacus, a tempor ligula. Fusce congue pulvinar imperdiet. Aenean malesuada, augue eu efficitur vestibulum, est ipsum gravida arcu, non fringilla velit nisl vitae enim.",
    imgSrc: counter,
    backImg: "/assets/images/smart-home-app_23-2148620419-_1_.webp",
  },
  {
    title: "MEMORIZING GAME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel volutpat lacus, a tempor ligula. Fusce congue pulvinar imperdiet. Aenean malesuada, augue eu efficitur vestibulum, est ipsum gravida arcu, non fringilla velit nisl vitae enim.",
    imgSrc: memorizingGame,
    backImg: "/assets/images/animal-memory-card-game_1308-113025-_1_.webp",
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle sectionColor={"secondary"} pseudoColor={"secondary"}>
          MY PROJECTS
        </SectionTitle>
        <FlexWrapper
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          gap={"38px"}
          wrap={"wrap"}
        >
          {projectData.map((item) => {
            return (
              <Project
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                backImg={item.backImg}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: ${Theme.colors.secondary};
  position: relative;
  z-index: 0;

  &::before {
    content: url(/assets/svg/dots.svg);
    display: inline-block;
    width: 413px;
    height: 505px;

    position: absolute;
    z-index: -1;
    top: 85px;
    left: 127px;
  }
`;
