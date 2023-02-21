import { NavLink } from 'react-router-dom'
import './style/style.scss'


function Header() {

    return <header className=''>
        <nav className=''>
            <NavLink to=''>Acceuil</NavLink>
        </nav>
    </header>

}

export default Header