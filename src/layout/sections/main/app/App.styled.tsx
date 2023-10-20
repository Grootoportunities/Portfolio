import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Theme } from "../../../../styles/Theme";

type AppPropsType = {
  iconId: string;
  title: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const App = (props: AppPropsType) => {
  return (
    <StyledApp>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      />
      <Title>{props.title}</Title>
    </StyledApp>
  );
};

const Title = styled.h3``;

const StyledApp = styled.article`
  //background-color: #a6bcfa;
  max-width: 160px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
