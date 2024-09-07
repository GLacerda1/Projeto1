import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
}

    :root {
    --color-padrao1: #864AAD;
    --color-padrao2: #450D69;
    --color-padrao3: #67149C;
    --color-padrao4: #9A1EE9;
    --color-padrao5: #B564E9;
}

    html, body {
    height: 100%;
    margin: 0;
}

html{
    scroll-behavior:smooth;
}

`;

export default GlobalStyle;
