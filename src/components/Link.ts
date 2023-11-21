import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { Link } from "react-scroll";

export const NavLink = styled(Link)`
  color: ${Theme.colors.accent};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  @media ${Theme.media.mobile} {
    font-size: 8px;
  }
`;
