import React from 'react';

import location from '../assets/img/icons/icon-location.svg';
import phone from '../assets/img/icons/icon-phone.svg';
import mail from '../assets/img/icons/icon-email.svg';
import logo from '../assets/img/logo.svg';

const Link = props => <li><a href="#">{props.text}</a></li> // eslint-disable-line

export default function Footer () {
    return (
        <footer>
            <div className="card-early-access">
                <h2>Get early access today</h2>
                <p>
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you.
                </p>

                <fieldset>
                    <input type="email" placeholder="email@example.com" />
                    <input type="submit" value="Get Started For Free" />
                </fieldset>
            </div>
            <div className="container">
                <img src={logo} alt="Fylo's logo" />
                <div className="info-wrapper">
                    <div className="contact">
                        <address>
                            <img src={location} alt="Location icon"/>
                            <p>7468 East Eagle Dr. Braintree, MA 02184</p>
                        </address>
                        <ul>
                            <li><a href="tel:00000000000"><img src={phone} alt="Phone icon" /> +1-543-123-4567 </a></li>
                            <li><a href="mailto:example@fylo.com"><img src={mail} alt="Mail icon" /> example@fylo.com </a></li>
                        </ul>
                    </div>

                    <div className="links">
                        <ul>
                            <Link text="About Us"/>
                            <Link text="Jobs"/>
                            <Link text="Press"/>
                            <Link text="Blog"/>
                        </ul>
            
                        <ul>
                            <Link text="Contact Us"/>
                            <Link text="Terms"/>
                            <Link text="Privacy"/>
                        </ul>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li> {/*eslint-disable-line*/}
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li> {/*eslint-disable-line*/}
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li> {/*eslint-disable-line*/}
                        </ul>
                    </div>
                </div>

            </div>
            <div className="attribution">
                <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a> and coded by <a href="https://github.com/edwardribas" target="_blank" rel="noreferrer">Ribas</a>.</p>
            </div>
        </footer>
    )
}