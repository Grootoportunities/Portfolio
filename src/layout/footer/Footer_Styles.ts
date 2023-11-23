import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import logoImage from "../../assets/logo/Logo__3_-removebg-preview-_1_.webp";
import wave from "../../assets/images/wave.svg";

const Footer = styled.footer`
  background-color: ${Theme.colors.primary};
  padding-bottom: 40px;

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
