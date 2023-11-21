//todo: Закомментированные стили в Menu - для мобайл меню

import styled, { css } from "styled-components";
import { NavLink } from "../../../components/Link";
import { Theme } from "../../../styles/Theme";

//Menu

const MenuItem = styled.li`
  position: relative;

  ${NavLink} {
    color: ${Theme.colors.font.pramiary.light};
    text-align: center;
    font-size: 16px; //20px
    font-weight: 400;
    cursor: pointer; //none
    transition: ${Theme.animations.transitions.regular}; //none

    &::before {
      content: "";
      display: inline-block;
      height: 3px;
      background-color: ${Theme.colors.font.pramiary.light};

      position: absolute;
      top: 130%;
      right: -10px;
      left: -10px;
      z-index: 1;

      transform: scale(0);
      transition: ${Theme.animations.transitions.regular}; //none
    }

    &::after {
      content: "";
      display: inline-block;
      height: 3px;
      background-color: ${Theme.colors.font.pramiary.light};

      position: absolute;
      bottom: 130%;
      right: -10px;
      left: -10px;
      z-index: 1;

      transform: scale(0);
      transition: ${Theme.animations.transitions.regular}; //none
    }

    &:hover,
    &.active {
      //no active
      letter-spacing: 5px;

      &::before,
      &::after {
        transform: scale(1);
      }
    }
  }
`;

//MobileMenu

const MobileMenu = styled.nav``;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: ${Theme.animations.transitions.mobilePopUp};

  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    transform: translateX(200%);
    transition: ${Theme.animations.transitions.mobilePopUp};
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateX(0);

      & ul {
        transform: translateX(0);
      }
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.font.pramiary.light};
    position: absolute;
    left: 40px;
    bottom: 50px;
    transition: ${Theme.animations.transitions.mobilePopUp};

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.font.pramiary.light};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${Theme.colors.font.pramiary.light};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

//DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 58px;
  }
`;

export const S = {
  MenuItem,
  MobileMenu,
  MobileMenuPopUp,
  BurgerButton,
  DesktopMenu,
};
