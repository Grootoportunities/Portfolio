import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Theme } from "../../../../styles/Theme";

type AppPropsType = {
  // iconId: string;
  title: string;
  imgSrc: string;
  // width?: string;
  // height?: string;
  // viewBox?: string;
};

export const App = (props: AppPropsType) => {
  return (
    <StyledApp>
      <AppImg src={props.imgSrc} />
      {/*<Icon*/}
      {/*  iconId={props.iconId}*/}
      {/*  width={props.width}*/}
      {/*  height={props.height}*/}
      {/*  viewBox={props.viewBox}*/}
      {/*/>*/}
      <Title>{props.title}</Title>
    </StyledApp>
  );
};

const AppImg = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 55px;
  border: 10px solid ${Theme.colors.secondary};
  background-color: ${Theme.colors.secondary};
`;

const Title = styled.h3`
  color: ${Theme.colors.font.secondary.lighter};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
`;

const StyledApp = styled.article`
  min-width: 160px;
  width: 100%;
  min-height: 124px;
  padding-bottom: 21px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 161px;
    height: 91px;
    border-radius: 24px;
    background-color: ${Theme.colors.primary};
    box-shadow: 0 4px 6px 0 ${Theme.colors.shadow};
    z-index: -1;
    bottom: 0;
    position: absolute;
  }
`;
