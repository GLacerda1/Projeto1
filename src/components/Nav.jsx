import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'

const Nav =()=>{
    return(
        <>
        <NavStyle>
            <header>
                <div>
                    <h1>nao sei</h1>
                    <ul>
                        <Link to='/home' className='nav-links'>Home</Link>
                        <Link to='/Produtos' className='nav-links'>Produtos</Link>
                        <Link to='/Sobre' className='nav-links'>Sobre</Link>
                    </ul>
                </div>     
            </header>
        </NavStyle>
        </>
    )
}
export default Nav