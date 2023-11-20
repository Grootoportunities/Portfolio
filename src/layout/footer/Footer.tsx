import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/images/Logo__3_-removebg-preview-_1_.webp";
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

  @media ${Theme.media.tablet} {
    padding: 0 0 10px;
  }
`;

const Copyright = styled.small`
  color: ${Theme.colors.font.pramiary.dark};
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  position: relative;
`;

const FooterImage = styled.img.attrs({
  src: logoImage,
})`
  object-fit: cover;
  width: 100px;
  position: relative;
`;
