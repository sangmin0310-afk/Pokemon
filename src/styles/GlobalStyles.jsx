import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset some default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  /* Add additional global styles here */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* You can define more global styles as needed */
`;

export default GlobalStyles;
