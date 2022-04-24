import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';

export default function Header () {
    const [activeMenu, toggleMenu] = useState('');
    window.onscroll = () => {if (window.scrollY >= 80 && activeMenu) toggleMenu('')};
    return (
        <header>
            <nav>
                <img src={logo} alt="Fylo's logo"/>
                <ul className={activeMenu ? 'active' : ''}>
                    <li><a href="#features" onClick={() => toggleMenu('')}>Features</a></li>
                    <li><a href="#team" onClick={() => toggleMenu('')}>Team</a></li>
                    <li><a href="#" id="signin" onClick={() => toggleMenu('')}>Sign In</a></li> {/*eslint-disable-line*/}
                </ul>
                <i className="fa-solid fa-bars-staggered toggler" onClick={() => toggleMenu(!activeMenu)}></i>
            </nav>
        </header>
    )
}