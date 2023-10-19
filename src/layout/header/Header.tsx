import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

const items = ["Home", "Projects", "About", "Content"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
          <Logo />
          <HeaderMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(166, 188, 250, 0.52);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
