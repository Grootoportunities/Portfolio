import React from "react";
import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { NavLink } from "../../../components/link/Link";

type HeaderMenuPropsType = {
  menuItems: Array<{
    title: string;
    hrefItem: string;
  }>;
};

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <NavLink
                activeClass={"active"}
                smooth
                to={item.hrefItem}
                spy
                offset={-10}
              >
                {item.title}
              </NavLink>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 58px;
  }

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const ListItem = styled.li`
  position: relative;

  ${NavLink} {
    color: ${Theme.colors.font.pramiary.light};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    transition: ${Theme.animations.transitions.regular};

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
      transition: ${Theme.animations.transitions.regular};
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
      transition: ${Theme.animations.transitions.regular};
    }

    &:hover,
    &.active {
      letter-spacing: 5px;

      &::before,
      &::after {
        transform: scale(1);
      }
    }
  }
`;
