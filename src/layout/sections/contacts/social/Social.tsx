import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

export const Social = (props: { iconId: Array<string> }) => {
  return (
    <StyledSocial>
      {props.iconId.map((item) => {
        return <Icon iconId={item} />;
      })}
    </StyledSocial>
  );
};

const StyledSocial = styled.div``;
