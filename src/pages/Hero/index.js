import React from 'react';
import illustration from '../../assets/img/illustrations/illustration-intro.png';
import styles from './styles.module.scss';

export default function Hero () {
    return (
        <section id={styles.hero}>
            <img src={illustration} alt="Two people organizing an archives folder illustration."/>
            <div className={styles.text}>
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