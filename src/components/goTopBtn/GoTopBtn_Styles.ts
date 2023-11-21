import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const GoTopBtn = styled.button`
  padding: 20px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: ${Theme.colors.secondary};
  z-index: 99999999999999;
  box-shadow: 1px 1px 10px 10px rgba(33, 87, 242, 0.2);
  border-radius: 50%;
  color: ${Theme.colors.accent};
`;

export const S = {
  GoTopBtn,
};
