import { useState } from 'react';
import {Link} from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function openMenu() {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                    <img src="images/logo_f.png" alt="" />
                    
                    <div className={(isOpen)? 'nav__toggle show-icon' : 'nav__toggle'} id="nav-toggle" onClick={openMenu}>
                        <i className="ri-menu-line nav__burger"></i>
                        <i className="ri-close-line nav__close"></i>
                    </div>
                </div>
                <div className={(isOpen)? 'nav__menu show-menu' : 'nav__menu'} id="nav-menu">
                    <ul className="nav__list">
                        <li><Link to="/" className="nav__link">Home</Link></li>
                        <li><Link to="/about" className="nav__link">About Us</Link></li> 
                        <li><Link to="/services" className="nav__link">Services</Link></li>
                        <li><Link to="/contact" className="nav__link">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;