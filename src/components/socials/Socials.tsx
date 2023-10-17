import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Socials = (props: { iconId: Array<string> }) => {
  return (
    <StyledSocials>
      {props.iconId.map((item, index) => {
        return (
          <li key={index}>
            <a key={index}>
              <Icon
                width="38px"
                height={"38px"}
                viewBox={"0 0 38px 38px"}
                iconId={item}
              />
            </a>
          </li>
        );
      })}
    </StyledSocials>
  );
};

const StyledSocials = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
