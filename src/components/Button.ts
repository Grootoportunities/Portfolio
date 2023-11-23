import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const Button = styled.button`
  ${font({ color: Theme.colors.secondary, weight: 600, Fmax: 16, Fmin: 12 })}

  border-radius: 20px;
  background-color: ${Theme.colors.accent};
  text-transform: uppercase;
  padding: 15px 40px;

  &:hover {
    background: ${Theme.colors.buttonActive};
    transition: ${Theme.animations.transitions.regular};
  }

  &:active {
    transform: translateY(5px);
  }
`;
