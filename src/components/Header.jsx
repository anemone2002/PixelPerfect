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
                        
                        <li><a className="nav__link" href='#service'>Services</a></li>
                        <li><a className="nav__link" href='#portfolio'>Portfolio</a></li>
                        <li><a className="nav__link"  href="#contacts">Contact</a></li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;