import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

type AppPropsType = {
  title: string;
  imgSrc: string;
};

export const App = (props: AppPropsType) => {
  return (
    <StyledApp>
      <AppImg src={props.imgSrc} />
      <Title>{props.title}</Title>
    </StyledApp>
  );
};

const AppImg = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: ${Theme.colors.secondary};

  @media ${Theme.media.tablet} {
    height: 90px;
    width: 90px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  text-align: center;

  ${font({
    color: Theme.colors.font.secondary.lighter,
    weight: 600,
  })}

  @media ${Theme.media.tablet} {
    font-size: 34px;
  }
`;

const StyledApp = styled.article`
  min-width: 160px;
  width: 100%;
  min-height: 124px;
  height: 100%;
  padding-bottom: 21px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 160px;
    height: 90px;
    border-radius: 24px;
    background-color: ${Theme.colors.primary};
    box-shadow: 0 4px 6px 0 ${Theme.colors.shadow};
    z-index: -2;
    bottom: 0;
    position: absolute;

    @media ${Theme.media.tablet} {
      width: 270px;
      height: 155px;
    }
  }

  &::after {
    content: "";
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: ${Theme.colors.secondary};
    position: absolute;
    z-index: -1;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);

    @media ${Theme.media.tablet} {
      width: 110px;
      height: 110px;
    }
  }

  @media ${Theme.media.tablet} {
    min-width: 270px;
    width: 100%;
    min-height: 155px;
    height: 100%;
    padding-bottom: 35px;
  }
`;
