import { NavLink } from 'react-router-dom'
import './style/style.scss'

function Header() {

    return <header className='header'>
        <nav className='header_nav'>
            <NavLink to='' className='header_nav_link'>Acceuil</NavLink>
            <i className="fa-solid fa-cloud header_nav_logo"></i>
            <NavLink to='/autre' className='header_nav_link'>Autre</NavLink>
        </nav>
    </header>

}

export default Header