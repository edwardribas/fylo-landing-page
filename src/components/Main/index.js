import React from 'react';
import styles from './styles.module.scss';

// Pages
import Hero from '../../pages/Hero';
import Features from '../../pages/Features';
import About from '../../pages/About';
import Team from '../../pages/Team';

export default function Main () {
    return (
        <main>
            <Hero />
            <Features />
            <About />
            <Team />
        </main>
    )
}