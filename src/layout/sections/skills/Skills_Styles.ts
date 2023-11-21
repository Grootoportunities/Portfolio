import styled from "styled-components";
import { font } from "../../../styles/Common";
import { Theme } from "../../../styles/Theme";

//Skills

const Skills = styled.section`
  background-color: ${Theme.colors.primary};
`;

//Skill

const SkillTitle = styled.h3`
  text-align: center;
  font-size: 20px;

  ${font({
    color: Theme.colors.font.pramiary.dark,
    family: "Kalameh, sans-serif",
    weight: 700,
    Fmax: 20,
    Fmin: 14,
  })}
`;

const Skill = styled.article`
  margin: 20px;
  width: 90px;
  flex-grow: 1;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 160px;
    height: 160px;
    background-color: #bccbf6;
    border-radius: 50px;
    box-shadow: 5px 6px 10px 10px rgba(0, 0, 0, 0.1);

    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media ${Theme.media.tablet} {
      width: 130px;
      height: 130px;
    }
  }
  }

  @media ${Theme.media.tablet} {
    width: 60px;
  }
`;

export const S = {
  SkillTitle,
  Skill,
  Skills,
};
