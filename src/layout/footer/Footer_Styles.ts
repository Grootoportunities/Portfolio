import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import logoImage from "../../assets/logo/Logo__3_-removebg-preview-_1_.webp";
import wave from "../../assets/images/wave.svg";

const Footer = styled.footer`
  background-color: ${Theme.colors.primary};
  padding-bottom: 40px;
  position: relative;
  z-index: -1;
  margin-top: 50px;

  &::before {
    content: "";
    position: absolute;
    background: url(${wave}) repeat-x center top;
    width: 100%;
    height: 100%;
    top: -50px;

    @media ${Theme.media.mobile} {
      top: -25px;
    }
  }

  @media ${Theme.media.tablet} {
    padding-bottom: 10px;
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

export const S = { Footer, Copyright, FooterImage };
