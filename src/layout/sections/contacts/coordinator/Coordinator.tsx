import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type CoordinatorPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Coordinator = (props: CoordinatorPropsType) => {
  return (
    <StyledCoordinator>
      <Icon iconId={props.iconId} />
      <Info>
        <CoordinatorTitle>{props.title}</CoordinatorTitle>
        <CoordinatorText>{props.text}</CoordinatorText>
      </Info>
    </StyledCoordinator>
  );
};

const StyledCoordinator = styled.div`
  display: flex;
  align-items: center; //todo: Почему работает  только на первый координатор?

  max-width: 180px;
  width: 100%;
`;

const CoordinatorTitle = styled.h4`
  margin: 0;
`;

const CoordinatorText = styled.p`
  margin: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
