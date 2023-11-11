import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { Icon } from "../../components/icon/Icon";
import { Theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items: Array<{ title: string; hrefItem: string }> = [
  { title: "Home", hrefItem: "home" },
  { title: "Projects", hrefItem: "projects" },
  { title: "About", hrefItem: "about" },
  { title: "Skills", hrefItem: "skills" },
  { title: "Contacts", hrefItem: "contacts" },
];

export const Header = () => {
  const [headerOnTop, setheaderOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setheaderOnTop(false);
      else setheaderOnTop(true);
    });
  }, []);

  return (
    <StyledHeader isOnTop={headerOnTop}>
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

const StyledHeader = styled.header<{ isOnTop: boolean }>`
  //backdrop-filter: blur(5px);
  background-color: ${Theme.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  transition: ${Theme.animations.transitions.regular};

  ${(props) =>
    props.isOnTop &&
    css<{ isOnTop: boolean }>`
      background-color: transparent;
      padding: 20px 0;
    `}

  @media ${Theme.media.tablet} {
    padding: 0;
    background-color: ${Theme.colors.secondary};
  }
`;

const ModeBtn = styled.button`
  display: none;
  @media ${Theme.media.tablet} {
    display: none;
  }
`;
