import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
  }
  li {
    list-style: none;
    text-decoration: none;
  }
`;
