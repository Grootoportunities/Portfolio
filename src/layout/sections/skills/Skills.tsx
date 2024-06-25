import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { Fade } from "react-awesome-reveal";
import { S } from "./Skills_Styles";

const skillData = [
  {
    title: "React",
    iconId: "React",
    viewBox: "0 0 50 50",
  },
  {
    title: "Redux",
    iconId: "Redux",
    viewBox: "0 0 32 35",
  },
  {
    title: "TypeScript",
    iconId: "TypeScript",
    viewBox: "0 0 17 15",
  },
  {
    title: "JavaScript",
    iconId: "JavaScript",
    viewBox: "0 0 17 15",
  },
  {
    title: "HTML",
    iconId: "HTML5",
    viewBox: "0 0 25 25",
  },
  {
    title: "CSS",
    iconId: "CSS3",
    viewBox: "0 0 25 25",
  },
  {
    title: "Git",
    iconId: "Git",
    viewBox: "0 0 22 25",
  },
  {
    title: "Styled Components",
    iconId: "StyledComponents",
    viewBox: "0 0 41 41",
  },
  {
    title: "Rest API",
    iconId: "RestAPI",
    viewBox: "0 0 48 48",
  },
  {
    title: "Axios",
    iconId: "Axios",
    viewBox: "0 0 24 24",
  },
  {
    title: "Unit Tests",
    iconId: "UnitTests",
    viewBox: "0 0 24 24",
  },
  {
    title: "Postman",
    iconId: "Postman",
    viewBox: "0 0 256 256",
  },
  {
    title: "Storybook",
    iconId: "Storybook",
    viewBox: "0 0 24 24",
  },
  {
    title: "Formik",
    iconId: "Formik",
    viewBox: "0 0 35 35",
  },
  {
    title: "Material UI",
    iconId: "MUI",
    viewBox: "0 0 256 160",
  },
];

export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle sectionColor={"primary"} pseudoColor={"primary"}>
          MY SKILLS
        </SectionTitle>
        <FlexWrapper
          wrap={"wrap"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"100px;"}
        >
          <Fade cascade damping={0.2}>
            {skillData.map((item) => {
              return (
                <Skill
                  title={item.title}
                  iconId={item.iconId}
                  viewBox={item.viewBox}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
