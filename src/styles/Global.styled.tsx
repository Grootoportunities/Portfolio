import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  section {
    padding: 78px 0; //todo: Узнать почему main наклыдвается на projects
  }
  
  p {
    color: ${Theme.colors.font.pramiary.light};
    font-size: 20px;
    font-weight: 400;
  }
  
  // section:nth-of-type(odd) {
  //   background-color: ${Theme.colors.secondary};
  // }
  //
  // section:nth-of-type(even) {
  //   background-color: ${Theme.colors.primary};
  // }
`;