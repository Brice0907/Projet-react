import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style/style.scss'


function Header() {

    const [logoIndex, setLogoIndex] = useState(true)

    return <header className='header'>
        <nav className='header_nav'>
            <NavLink to='' onClick={() => setLogoIndex(true)} className='header_nav_link'>Météo</NavLink>
            {window.location.pathname === "/carousel" || logoIndex === false ?
                <i className="fa-solid fa-image header_nav_logo"></i>
                : <i className="fa-solid fa-cloud header_nav_logo"></i>}
            <NavLink to='/carousel' onClick={() => setLogoIndex(false)} className='header_nav_link'>Carousel</NavLink>
        </nav>
    </header>

}

export default Header