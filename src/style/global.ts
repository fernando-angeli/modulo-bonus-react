import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --purple-300: rgba(85, 49, 255, 0.25);
  --purple-600: #5531FF;
  --purple-900: #150057;
  
  --font-black: #1c1c1c;
  --font-white: #fff;
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
