import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

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
  background-color: #a6bcfa;
  max-width: 160px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
