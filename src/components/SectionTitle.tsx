import styled, { css } from "styled-components";
import { Theme } from "../styles/Theme";

type SectionTitlePropsType = {
  sectionColor: "primary" | "secondary";
  pseudoColor: "primary" | "secondary";
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
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

    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
  }
`;
