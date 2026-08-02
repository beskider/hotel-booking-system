import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    letter-spacing: 0.4px;
    overflow-y: hidden;
    background-color: ${({ theme }) => theme.colors.white};
  }
  
  a, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    letter-spacing: 0.4px;    
  }
`