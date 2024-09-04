import {Link} from 'react-router-dom'
import { NavStyles } from '../css/NavStyles'

const Nav =()=>{
    return(
        <>
        <NavStyles>
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
        </NavStyles>
        </>
    )
}
export default Nav