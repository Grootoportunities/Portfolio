import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Socials = styled.ul`
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
  transition: ${Theme.animations.transitions.regular};

  &:hover {
    color: ${Theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const SocialItem = styled.li``;

export const S = { Socials, SocialLink, SocialItem };
