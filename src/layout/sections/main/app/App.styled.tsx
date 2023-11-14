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
  }

  @media ${Theme.media.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled.h3`
  text-align: center;

  ${font({
    color: Theme.colors.font.secondary.lighter,
    weight: 600,
    // Fmax: 34,
    // Fmin: 18, //todo: при миксине слетают стили
  })}
  @media ${Theme.media.tablet} {
    font-size: 34px;
  }

  @media ${Theme.media.mobile} {
    font-size: 18px;
  }
`;

const StyledApp = styled.article`
  width: 160px;
  height: 124px;
  padding-bottom: 21px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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

    @media ${Theme.media.mobile} {
      width: 145px;
      height: 80px;
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

    @media ${Theme.media.mobile} {
      width: 70px;
      height: 70px;
    }
  }

  @media ${Theme.media.tablet} {
    width: 270px;
    height: 210px;
    padding-bottom: 35px;
    margin: 7px;
  }

  @media ${Theme.media.mobile} {
    width: 145px;
    height: 110px;
    padding-bottom: 18px;
    margin: 0;
  }
`;
