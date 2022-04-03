import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  -webkit-margin-before: 0;
  margin-block-start: 0;
  -webkit-margin-after: 0;
  margin-block-end: 0;
};
html, body {
  height: 100%;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #FFFFFF;
  color: #1D1F22;
  font-size: 16px;
  & body {  
  max-width: 1440px;
  }
}
`