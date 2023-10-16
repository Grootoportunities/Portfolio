import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type AppPropsType = {
  iconId: string;
  title: string;
};

export const App = (props: AppPropsType) => {
  return (
    <StyledApp>
      <Icon iconId={props.iconId} />
      <Title>{props.title}</Title>
    </StyledApp>
  );
};

const Title = styled.h3``;

const Image = styled.img``;

const StyledApp = styled.article`
  background-color: #a6bcfa;
  max-width: 160px;
  width: 100%;
`;
