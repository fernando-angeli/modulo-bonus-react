import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --black: #020202;
  --blue-900: #0d324d;
  --blue-300: #5eb1bf;
  --gray-100: #dddbcd;
  --gray-600: #8f8f8f;
  
  --sticky-1: #d6e77c;
  --sticky-2: #a7e7f5;
  --sticky-3: #f8c242;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  //1 rem = 16px - 100% do tamanho da fonte

  //quando a tela for com máximo de 1080px, vai diminuir o tamanho da fonte para 93.75% de 1 rem, ou seja, 15 pixels
  @media(max-width: 1080px){
    font-size: 93.75%;
  }

  //quando a tela for com máximo de 720px, vai diminuir o tamanho da fonte para 87.5% de 1 rem, ou seja, 14 pixels
  @media(max-width: 720px){
    font-size: 87.5%;
  }
}
`;
