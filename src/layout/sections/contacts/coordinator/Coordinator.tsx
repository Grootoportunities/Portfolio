import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Theme } from "../../../../styles/Theme";

type CoordinatorPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Coordinator = (props: CoordinatorPropsType) => {
  return (
    <StyledCoordinator>
      <Icon iconId={props.iconId} viewBox={"0 0 50 25"} />
      <Info>
        <CoordinatorTitle>{props.title}</CoordinatorTitle>
        <CoordinatorText>{props.text}</CoordinatorText>
      </Info>
    </StyledCoordinator>
  );
};

const StyledCoordinator = styled.div`
  display: flex;
  align-items: center;
`;

const CoordinatorTitle = styled.h4`
  color: ${Theme.colors.font.secondary.darker};
  font-size: 16px;
  font-weight: 500;
`;

const CoordinatorText = styled.span`
  color: ${Theme.colors.font.secondary.dark};
  font-size: 12px;
  font-weight: 400;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
