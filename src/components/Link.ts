import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { Link } from "react-scroll";
import { font } from "../styles/Common";

export const NavLink = styled(Link)`
  ${font({ color: Theme.colors.accent, weight: 600, Fmax: 16, Fmin: 12 })}

  text-transform: uppercase;
  text-align: center;
`;
