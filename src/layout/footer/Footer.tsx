import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/images/Logo__2_-removebg-preview-_1_.webp";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} alignItems={"center"} gap={"7px"}>
        <FooterImage />
        <Copyright>All Rights Reserved 2023©</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primary};
  padding: 40px 0;

  //position: relative;
  //z-index: 0;

  //&::before {
  //  content: url(/assets/svg/wave.svg);
  //  display: inline-block;
  //
  //  position: absolute;
  //  left: 0;
  //  right: 0;
  //  top: -100px;
  //  width: 100%;
  //  z-index: -1;
  //}
`;

const Copyright = styled.small`
  color: ${Theme.colors.secondary};
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

const FooterImage = styled.img.attrs({
  src: logoImage,
})`
  object-fit: cover;
  width: 100px;
`;
