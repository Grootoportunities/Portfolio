import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import logoImage from "../../assets/images/Logo__4_-removebg-preview.png";

const items = ["Home", "Projects", "About", "Content"];

export const Header = () => {
  return (
    <StyledHeader>
      {/*<Logo />*/}
      <LogoImage />
      <Menu menuItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #a6bcfa;
  display: flex;
  justify-content: space-between;
`;

const LogoImage = styled.img.attrs({
  src: logoImage,
})`
  object-fit: cover;
  //height: 100px;
  width: 80px;
`;
