import React from "react";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

export const Logo = () => {
  return (
    <LogoLink
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Icon iconId={"Logo"} viewBox={"0 0 500 500"} />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  cursor: pointer;
`;
