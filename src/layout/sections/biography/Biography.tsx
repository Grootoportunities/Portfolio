import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
// import backimg from "../../../assets/images/Belarus__Salihorski_rajon-_1_.webp";

export const Biography = () => {
  return (
    <StyledBiography>
      <SectionTitle>ABOUT ME</SectionTitle>
      <FlexWrapper justifyContent={"center"}>
        <Slider></Slider>
      </FlexWrapper>
    </StyledBiography>
  );
};

const StyledBiography = styled.section`
  background-color: #a6bcfa;
  //background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4e/Belarus%2C_Salihorski_rajon.png");
`;
