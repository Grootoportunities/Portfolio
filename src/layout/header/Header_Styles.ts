import styled, { css } from "styled-components";
import { Theme } from "../../styles/Theme";

const Header = styled.header<{ isOnTop: boolean }>`
  background-color: ${Theme.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  transition: ${Theme.animations.transitions.regular};

  ${(props) =>
    props.isOnTop &&
    css<{ isOnTop: boolean }>`
      background-color: transparent;
      padding: 20px 0;
    `}

  @media ${Theme.media.tablet} {
    padding: 0;
    background-color: ${Theme.colors.secondary};
  }
`;

const ModeBtn = styled.button`
  display: none;
  @media ${Theme.media.tablet} {
    display: none;
  }
`;

export const S = {
  Header,
  ModeBtn,
};
