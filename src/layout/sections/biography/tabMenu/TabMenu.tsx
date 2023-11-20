import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "../../../../components/link/Link";
import { Theme } from "../../../../styles/Theme";

export type TabsStatusType = "main" | "skills" | "experience" | "education";

type TabMenuPropsType = {
  tabItems: Array<{
    status: TabsStatusType;
    title: string;
  }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: string;
};

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              active={props.currentFilterStatus === item.status}
            >
              <NavLink
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </NavLink>
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
    flex-wrap: wrap;
    gap: 58px;

    @media ${Theme.media.tablet} {
      justify-content: flex-start;
      gap: 17px;
    }

    @media ${Theme.media.mobile} {
      gap: 24px;
    }
  }

  margin: 15px 0;
`;

const ListItem = styled.li<{ active: boolean }>`
  ${NavLink} {
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
    transition: ${Theme.animations.transitions.regular};
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

  ${(props) =>
    props.active &&
    css<{ active: boolean }>`
      &::before {
        width: 100%;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    `}

  @media ${Theme.media.mobile} {
    margin: 10px 0;
  }
`;
