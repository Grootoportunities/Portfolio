import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
  border-radius: 20px;
  background-color: ${Theme.colors.accent};
  color: ${Theme.colors.secondary};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 15px 40px;

  &:hover {
    background: ${Theme.colors.buttonActive};
    transition: ${Theme.animations.transitions.regular};
  }

  &:active {
    transform: translateY(5px);
  }

  @media ${Theme.media.mobile} {
    font-size: 12px;
  }
`;
