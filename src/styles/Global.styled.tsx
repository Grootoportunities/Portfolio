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
    min-width: 360px;
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
    padding: 65px 0;
    
    @media ${Theme.media.tablet} {
      padding: 60px 0;
    }
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
