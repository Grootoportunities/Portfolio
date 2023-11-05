import React from "react";
import styled, { css } from "styled-components";
import { Link } from "../../../../components/Link/Link";
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
              <Link
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </Link>
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

const ListItem = styled.li<{ active: boolean }>`
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
`;
