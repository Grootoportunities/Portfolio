import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { Theme } from "../../styles/Theme";

export const Socials = (props: { iconId: Array<string> }) => {
  return (
    <StyledSocials>
      {props.iconId.map((item, index) => {
        return (
          <SocialItem key={index}>
            <SocialLink href=" " key={index}>
              <Icon
                width="50"
                height={"50"}
                viewBox={"0 0 25 25"}
                iconId={item}
              />
            </SocialLink>
          </SocialItem>
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

const SocialLink = styled.a`
  background-color: rgba(188, 203, 246, 0.4);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${Theme.colors.socialIcons};

  &:hover {
    color: ${Theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const SocialItem = styled.li``;
