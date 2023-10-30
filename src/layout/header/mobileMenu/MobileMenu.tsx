import React from "react";

import styled, { css } from "styled-components";
import { Theme } from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopUp isOpen={false}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href="">{item}</Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopUp>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${Theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0.9);
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ul {
    display: flex;
    justify-content: center;
    gap: 58px;
    flex-direction: column;
    align-items: center;
  }
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

const Link = styled.a`
  color: ${Theme.colors.font.pramiary.light};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

const ListItem = styled.li`
  position: relative;

  &:hover {
    letter-spacing: 5px;

    &::before,
    &::after {
      transform: scale(1);
    }
  }

  &:active {
    transform: translateY(2px);
  }

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
  }
`;
