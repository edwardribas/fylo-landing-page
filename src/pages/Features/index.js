import React from 'react';

// Features Icons
import icon1 from '../../assets/img/features/icon-access-anywhere.svg';
import icon2 from '../../assets/img/features/icon-security.svg';
import icon3 from '../../assets/img/features/icon-collaboration.svg';
import icon4 from '../../assets/img/features/icon-any-file.svg';
import styles from './styles.module.scss';

function Feature (props) {
    return(
        <div className={styles.feature}>
            <img src={props.src} alt={props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
    
}

export default function Features () {
    return (
        <section id='features' className={styles.features}>
            <div className={styles.wrapper}>
                <Feature src={icon1} alt="Cross-platform devices illustration."
                title="Access your files, anywhere" 
                text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."/>
                
                <Feature src={icon2} alt="Security shield illustration."
                title="Security you can trust" 
                text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."/>
                
                <Feature src={icon3} alt="Collaboration group illustration."
                title="Real-time collaboration" 
                text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."/>
                
                <Feature src={icon4} alt="Multiple archives folder illustration."
                title="Store any type of file" 
                text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."/>
            </div>
        </section>
    )
}