import React from 'react';
import member1 from '../assets/img/team/profile-1.jpg';
import member2 from '../assets/img/team/profile-2.jpg';
import member3 from '../assets/img/team/profile-3.jpg';

function Card (props){
    return (
        <div className="card">
            <p>{props.testimonial}</p>
            <div className="author">
                <img src={props.src} alt="Fylo's team member"/>
                <div className="role">
                    <h4>{props.name}</h4>
                    <p>{props.role}</p>
                </div>
            </div>
        </div>
    )
}

export default function Team () {
    return (
        <section id="team">
            <Card testimonial="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." src={member1} name="Satish Patel" role="Founder & CEO, Huddle"/>
            <Card testimonial="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." src={member2} name="Bruce McKenzie" role="Founder & CEO, Huddle"/>
            <Card testimonial="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." src={member3} name="Iva Boyd" role="Founder & CEO, Huddle"/>
        </section>
    )
}
