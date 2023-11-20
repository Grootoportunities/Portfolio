import styled, { css } from "styled-components";
import { Theme } from "../styles/Theme";
import { font } from "../styles/Common";

type SectionTitlePropsType = {
  sectionColor: "primary" | "secondary";
  pseudoColor: "primary" | "secondary";
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  ${font({ weight: 600, Fmax: 32, Fmin: 30 })}

  text-align: center;
  margin-bottom: 85px;

  position: relative;

  ${(props) =>
    props.sectionColor === "primary" &&
    css<SectionTitlePropsType>`
      color: ${Theme.colors.font.secondary.lighter};
    `}
  ${(props) =>
    props.sectionColor === "secondary" &&
    css<SectionTitlePropsType>`
      color: ${Theme.colors.font.pramiary.dark};
    `}
  
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    width: 120px;
    background-color: ${Theme.colors.font.pramiary.dark};
    border-radius: 100px;

    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);

    ${(props) =>
      props.pseudoColor === "primary" &&
      css<SectionTitlePropsType>`
        background-color: ${Theme.colors.accent};
      `}

    ${(props) =>
      props.pseudoColor === "secondary" &&
      css<SectionTitlePropsType>`
        background-color: ${Theme.colors.primary};
      `}
  }

  @media ${Theme.media.tablet} {
    margin-bottom: 50px;
  }

  @media ${Theme.media.mobile} {
    margin-bottom: 40px;
  }
`;
