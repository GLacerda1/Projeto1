import { FooterStyle } from '../css/FooterStyle'

const Footer = () => {
    return (
      <>
        <FooterStyle>
            <section className="footer_container">
            <div className="footer_content">
                <h3>Desenvolvedores</h3>
                <ul className="footer_list">
                <li>
                    <a href="https://github.com/JoaoVicOli" target="_blank" rel="noopener noreferrer" className="footer-section-sobre">
                    João Oliveira
                    </a>
                </li>
                <li>
                    <a href="https://github.com/eerricc" target="_blank" rel="noopener noreferrer" className="footer-section-sobre">
                    Eric Segawa
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GabrielNakashima" target="_blank" rel="noopener noreferrer" className="footer-section-sobre">
                    Gabriel Nakashima
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GLacerda1" target="_blank" rel="noopener noreferrer" className="footer-section-sobre">
                    Gabriel Lacerda
                    </a>
                </li>
                <li>
                    <a href="https://github.com/melmis" target="_blank" rel="noopener noreferrer" className="footer-section-sobre">
                    Melyssa Huang
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer_content">
                <h3>Contato</h3>
                <div className="footer_text">
                <p>contato@empresa.com</p>
                <p>Telefone: (11) 1234-5678</p>
                </div>
            </div>
            <div className="footer_content">
                <h3>Redes sociais</h3>
                <ul className="social_icons">
                <li className="social_icons_li">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </li>
                </ul>
            </div>
            <div className="footer_content">
                <h3>Navegação</h3>
                <ul className="footer_list">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="footer_login">
                <h2 className="footer_login_titulo">Login</h2>
                <form id="loginForm">
                <input type="text" id="usuario" placeholder="Usuário" required />
                <input type="password" id="senha" placeholder="Senha" required />
                <button type="submit" className="btnlogin">Login</button>
                </form>
            </div>
            </section>
            <div className="footer_bottom">
            <p className="copyright">&copy; 2024 Empresa Fimtech. Todos os direitos reservados.</p>
            </div>
        </FooterStyle>
      </>
    );
  };
  
  export default Footer;
  