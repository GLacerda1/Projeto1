import styled from "styled-components";

export const NavStyle =styled.section`


.navegacao {
    display: flex;
    gap: 10px;
    float: right;
    margin-right: 30px;
    margin-top: 12px;
}

.navegacao-link {
    color: var(--color-padrao5);
    text-decoration: none;
    background-color: var(--color-padrao4); 
    border: none;
    border-radius: 8px; 
    padding: 10px 20px;
    font-size: 16px; 
    font-weight: bold;
    cursor: pointer; 
    transition: background-color 0.3s ease, transform 0.3s ease; /* Transições suaves */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra do botão */
}

.navegacao-link:hover {
    background-color: #2980b9; /* Cor ao passar o mouse */
    transform: translateY(-2px); /* Animação de hover */
}

.navegacao-link:active {
    background-color: var(--color-padrao1); /* Cor ao clicar */
    transform: translateY(1px); /* Animação ao clicar */
}

.navegacao-link:focus {
    outline: none; /* Remove o contorno ao focar */
}

`