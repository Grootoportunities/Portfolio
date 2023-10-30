import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { Icon } from "../../components/icon/Icon";
import { Theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = ["Home", "Projects", "About", "Content"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
          <Logo />

          <FlexWrapper
            justifyContent={"space-between"}
            gap={"64px"}
            alignItems={"center"}
          >
            <HeaderMenu menuItems={items} />
            <MobileMenu menuItems={items} />
            <ModeBtn>
              <Icon
                iconId={"Moon"}
                width={"37px"}
                height={"37px"}
                viewBox={"0 0 24 24"}
              />
            </ModeBtn>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
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

  @media ${Theme.media.tablet} {
    backdrop-filter: none;
  }
`;

const ModeBtn = styled.button`
  @media ${Theme.media.tablet} {
    display: none;
  }
`;
