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
    background-color: var(--color-padrao3); 
    border: none;
    border-radius: 8px; 
    padding: 10px 20px;
    font-size: 16px; 
    font-weight: bold;
    cursor: pointer; 
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

.navegacao-link:hover {
    background-color: var(--color-padrao4); 
    transform: translateY(-2px); 
}

.navegacao-link:active {
    background-color: var(--color-padrao5); 
    transform: translateY(1px); 
}

.navegacao-link:focus {
    outline: none; 
}

`