import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,html, #root{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  *{
      box-sizing: border-box;
  }
`;