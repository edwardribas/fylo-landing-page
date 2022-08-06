import React from 'react';
import member1 from '../../assets/img/team/profile-1.jpg';
import member2 from '../../assets/img/team/profile-2.jpg';
import member3 from '../../assets/img/team/profile-3.jpg';
import styles from './styles.module.scss';

function Card(props){
    return (
        <div className={styles.card}>
            <p>{props.testimonial}</p>
            <div className={styles.author}>
                <img src={props.src} alt="Fylo's team member"/>
                <div className={styles.role}>
                    <h3>{props.name}</h3>
                    <p>{props.role}</p>
                </div>
            </div>
        </div>
    )
}

export default function Team () {
    return (
        <section id="team" className={styles.team}>
            <Card
                testimonial="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                src={member1}
                name="Satish Patel"
                role="Founder & CEO, Huddle"
            />
            <Card
                testimonial="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                src={member2}
                name="Bruce McKenzie"
                role="Founder & CEO, Huddle"
            />
            <Card
                testimonial="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                src={member3}
                name="Iva Boyd"
                role="Founder & CEO, Huddle"
            />
        </section>
    )
}
