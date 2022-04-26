import React from 'react';

// Pages
import Hero from '../pages/hero.js';
import Features from '../pages/features.js';
import About from '../pages/about.js';
import Team from '../pages/team.js';

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