import { NavLink } from 'react-router-dom'
import './style/style.scss'

function Header() {


    return <header className='header'>
        <nav className='header_nav'>
            <NavLink to='' className='header_nav_link'>Météo</NavLink>
            {window.location.pathname === "/carousel" ?
                <i className="fa-solid fa-image header_nav_logo"></i>
                : <i className="fa-solid fa-cloud header_nav_logo"></i>}
            <NavLink to='/carousel' className='header_nav_link'>Carousel</NavLink>
        </nav>
    </header>

}

export default Header