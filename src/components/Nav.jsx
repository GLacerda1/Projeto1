import { Link } from 'react-router-dom';
import { NavStyle } from '../css/NavStyle';

const Nav = () => {
    return (
        <NavStyle>
            <header>
                <section className='navegacao_container'>
                    <h1 className='navegacao_title'>Fimtech Sports</h1>
                    <div className='navegacao'>
                        <ul>
                            <li><Link to='/home' className='navegacao-link'>Home</Link></li>
                            <li><Link to='/Produtos' className='navegacao-link'>Produtos</Link></li>
                            <li><Link to='/Sobre' className='navegacao-link'>Sobre</Link></li>
                        </ul>
                    </div> 
                </section>    
            </header>
        </NavStyle>
    );
}

export default Nav;
