import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/images/Logo__3_-removebg-preview-_1_.webp";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} alignItems={"center"}>
        {/*<Icon iconId={"FooterLogo"} /> todo: SVG не работает */}
        <FooterImage />
        <Copyright>©2023 Daniil Lameika. All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  max-height: 150px;
  background-color: #a6bcfa; //#00a3ff;
`;

const Copyright = styled.small``;

const FooterImage = styled.img.attrs({
  src: logoImage,
})`
  object-fit: cover;
  width: 100px;
`;
