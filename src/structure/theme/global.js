import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', sans-serif;
  }
  body {
    font-family: 'Roboto Slab', sans-serif;
    color: #333;
  }
  li {
    list-style: none;
    text-decoration: none;
  }
  a {
    text-decoration: none;color: inherit; 

  }

`;
