import React from "react";
import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Icon } from "../../../components/icon/Icon";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
        {/*<Icon iconId={"Moon"} />*/}
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
`;

const Link = styled.a`
  color: ${Theme.colors.font.pramiary.light};
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const ListItem = styled.li`
  position: relative;

  &:hover {
    letter-spacing: 5px;

    &::before {
      transform: scale(1);
    }

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
