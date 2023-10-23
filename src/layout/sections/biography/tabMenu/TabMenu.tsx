import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link/Link";
import { Theme } from "../../../../styles/Theme";

export const TabMenu = (props: { tabItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 58px;
  }

  margin: 15px 0;
`;

const ListItem = styled.li`
  ${Link} {
    font-size: 18px;
  }

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 25%;
    height: 2px;
    background-color: ${Theme.colors.accent};
    border-radius: 10px;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    &::before {
      width: 50%;
    }
  }

  &:active {
    &::before {
      width: 100%;
    }

    transform: translateY(1px);
  }
`;
