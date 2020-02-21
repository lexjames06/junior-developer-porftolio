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
            <MobileMenuButtonHeader />
        </div>
    );
}