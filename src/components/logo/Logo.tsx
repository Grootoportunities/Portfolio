import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/images/Logo__4_-removebg-preview-_1_.webp";

export const Logo = () => {
  return (
    <div>
      <a href=" ">
        <LogoImage />
        {/*<Icon iconId={"Logo"}/> todo: SVG не работает*/}
      </a>
    </div>
  );
};

const LogoImage = styled.img.attrs({
  src: logoImage,
})`
  object-fit: cover;
  width: 80px;
`;
