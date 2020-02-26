import React from 'react'
import MobileMenuButtonHeader from '../MobileMenuButtonHeader/MobileMenuButtonHeader'
import './Header.css'

export default function Header() {

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    return (
        <div className='header-container'>
            <h3 onClick={scrollToTop}>LJ</h3>
            <div className='mobile-menu-visibility'>
                <MobileMenuButtonHeader />
            </div>
            <div className='desktop-menu'>
                <p className='about'>About</p>
                <p className='projects-menu'>Projects</p>
                <p className='contact'>Contact</p>
                <p className='socials'>Socials</p>
            </div>
        </div>
    );
}