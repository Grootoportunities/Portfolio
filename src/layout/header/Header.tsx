import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";

import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { Icon } from "../../components/icon/Icon";
import { Theme } from "../../styles/Theme";

const items = ["Home", "Projects", "About", "Content"];

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justifyContent={"space-around"} alignItems={"center"}>
        <Logo />
        <HeaderMenu menuItems={items} />
        <ModeBtn>
          <Icon
            iconId={"Moon"}
            width={"37px"}
            height={"37px"}
            viewBox={"0 0 24 24"}
          />
        </ModeBtn>
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  backdrop-filter: blur(5px);
  background-color: ${Theme.colors.secondaryBlur};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

const ModeBtn = styled.button``;
