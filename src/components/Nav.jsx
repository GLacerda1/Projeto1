import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'

const Nav =()=>{
    return(
        <>
        <NavStyle>
            <header>
                <section className='navegacao_container'>
                <h1 className='navegacao_texto'>fimtech</h1>
                    <div className='navegacao'>
                        <ul>
                            <Link to='/home' className='navegacao-link'>Home</Link>
                            <Link to='/Produtos' className='navegacao-link'>Produtos</Link>
                            <Link to='/Sobre' className='navegacao-link'>Sobre</Link>
                        </ul>
                    </div> 
                </section>    
            </header>
        </NavStyle>
        </>
    )
}
export default Nav