import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { NavLink } from "./link/Link";

export const Button = styled.button`
  border-radius: 20px;
  background-color: ${Theme.colors.accent};
  color: ${Theme.colors.secondary};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 15px 40px;

  ${NavLink} {
    color: ${Theme.colors.secondary};
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;

    @media ${Theme.media.mobile} {
      font-size: 8px;
      white-space: nowrap;
    }
  }

  &:hover,
  &:active {
    background: ${Theme.colors.buttonActive};
    transition: ${Theme.animations.transitions.regular};
  }

  &:active {
    transform: translateY(5px);
  }

  @media ${Theme.media.mobile} {
    font-size: 8px;
    //padding: 0;
  }
`;
