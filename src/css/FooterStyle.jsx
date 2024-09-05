import styled from "styled-components";

export const FooterStyle = styled.section`
  footer {
    background-color: var(--color-padrao1);
    padding-top: 20px;
    min-height: 50px;
  }

  .footer_container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 0 100px;
  }

  .footer_content {
    text-align: center;
  }

  .footer_text {
    margin: auto;
    width: 190px;
    padding: 5px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .footer_content ul {
    list-style-type: none;
    padding: 0;
  }

  .footer_content a:hover {
    color: var(--color-padrao5);
  }

  li {
    list-style-type: none;
  }

  .footer_list li {
    padding: 7px;
    position: relative;
  }

  .footer_list li::before {
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 100%;
    width: 0;
    height: 2px;
    background: var(--color-padrao5);
    transition-duration: 0.5s;
  }

  .footer_list li:hover::before {
    width: 70px;
  }

  .social_icons {
    text-align: center;
  }

  .social_icons i {
    color: var(--color-padrao6);
    font-size: 25px;
    margin-right: 3px;
    transition: color 0.3s ease;
  }

  .social_icons i:hover {
    color: var(--color-padrao5);
  }

  a {
    text-decoration: none;
    color: var(--color-padrao6);
  }

  .botao_navegacao {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    color: var(--color-botao-efeito);
    cursor: pointer;
  }

  .footer_bottom {
    background: var(--color-padrao3);
    text-align: center;
    padding: 5px 0;
    margin-top: 20px;
  }

  .footer_bottom p {
    color: #343434;
    margin: 0;
    font-size: 16px;
  }

  input {
    border-radius: 3px;
  }

  .footer_login_titulo {
    margin-bottom: 10px;
  }

  .footer_login {
    display: flex;
    flex-direction: column;
    padding: 12px 0px 12px 40px;
    border: 1px solid var(--color-padrao3);
    border-radius: 5px;
    background-color: var(--color-padrao3);
    max-height: 180px;
  }

  .carro_img {
    width: 200px;
    height: 200px;
    margin-left: 70px;
  }

  .footer_login input[type="text"],
  .footer_login input[type="password"] {
    width: 140px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--color-padrao3);
    border-radius: 4px;
    background-color: white;
    font-size: 14px;
    color: #333;
  }

  .footer_login button {
    padding: 6px 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-padrao1);
    color: var(--color-texto);
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .footer_login button:hover {
    background-color: var(--color-padrao5);
  }

  #dropdownContainer {
    display: none;
  }

  .fade-out {
    animation: fadeOut 1s forwards;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
