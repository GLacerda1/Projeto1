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

html{
    scroll-behavior:smooth;
}

body{

    display:grid;
    grid-template-areas:
        'nav nav nav nav'
        'home home home home'
        'sobre sobre sobre sobre'
        'carros carros carros carros'
        'login login login login'

    grid-template-columns:repeat(5,0.5fr);
    grid-template-rows:repeat(5);
    font-size:1rem; 
}

.fimtech{
    background-color: var(--color-padrao)
}

`;

export default GlobalStyle;