import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family:  'Poppins';
  }
  body{
    background-color: #FFFFFF;
  }
  html{
    font-size: 62.5%;
  }
`;
