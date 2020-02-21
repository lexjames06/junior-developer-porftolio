import React from 'react'
import { useSelector } from 'react-redux';
import transition from '../../assets/transitions/picture-transition.png'
import blackTransition from '../../assets/transitions/picture-transition-black.png'
import email from '../../assets/icons/email.svg'
import './ContactMe.css'

export default function ContactMe() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <div className='contact-me-outer-container'>
            <img src={`${darkMode ? blackTransition : transition}`} alt='white-transition' />
            <div className={`contact-me-inner-container${darkMode ? ' dark' : ''}`}>
                <h1>Contact Me</h1>
                <h4>
                    I'm a passionate junior developer, 
                    based in London <br /><span>(willing to relocate)</span>, <br />waiting to hear from you!
                </h4>
                <a 
                    target='_blank' 
                    href='mailto: ajs.stewart@btinternet.com' 
                    rel="noopener noreferrer" 
                >
                    <img src={email} alt='email icon' />
                </a>
                <h3>ajs.stewart@btinternet.com</h3>
            </div>
        </div>
    );
}