import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <BackImage />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis malesuada erat, eget eleifend lectus dictum sit amet.
          </Text>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span> </span>
        <span> </span>
        <span> </span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const BackImage = styled.img``;

const Text = styled.p`
  display: inline-block;
  margin: 30px;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #2157f2;
  }
`;
