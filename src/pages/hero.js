import React from 'react';
import illustration from '../assets/img/illustrations/illustration-intro.png';

export default function Hero () {
    return (
        <section id="hero">
            <img src={illustration} alt="Two people organizing an archives folder illustration."/>
            <div className="text">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>
                    Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.
                </p>
                <a href="#features">Get Started</a>
            </div>
        </section>
    )
}