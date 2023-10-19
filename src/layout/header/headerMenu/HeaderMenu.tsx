import React from "react";
import styled from "styled-components";

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
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 58px;
  }
`;

const Link = styled.a`
  color: #393939;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  //for fun
`;

const ListItem = styled.li`
  &:hover,
  &:active {
    ${Link} {
      letter-spacing: 5px;
    }
  }

  &:after,
  &:before {
    ${Link} {
      backface-visibility: hidden;
      border: 1px solid rgba(#fff, 0);
      bottom: 0;
      content: " ";
      display: block;
      margin: 0 auto;
      position: relative;
      transition: all 280ms ease-in-out;
      width: 0;
    }
  }

  &:hover:after,
  &:hover:before {
    ${Link} {
      backface-visibility: hidden;
      border-color: #fff;
      transition: width 350ms ease-in-out;
      width: 70%;
    }
  }

  &:hover:before {
    ${Link} {
      bottom: auto;
      top: 0;
      width: 70%;
    }
  }
`;
