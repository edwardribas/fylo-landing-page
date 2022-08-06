import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

export default function Header () {
    const [activeMenu, toggleMenu] = useState('');
    window.onscroll = () => {if (window.scrollY >= 80 && activeMenu) toggleMenu('')};
    
    return (
        <header>
            <nav>
                <img src={logo} alt="Fylo's logo"/>
                <ul className={activeMenu ? styles.active : ''}>
                    <li><a href="#features" onClick={() => toggleMenu('')}>Features</a></li>
                    <li><a href="#team" onClick={() => toggleMenu('')}>Team</a></li>
                    <li><a href="#" id={styles.signin} onClick={() => toggleMenu('')}>Sign In</a></li> {/*eslint-disable-line*/}
                </ul>
                <button onClick={() => toggleMenu(!activeMenu)}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </nav>
        </header>
    )
}