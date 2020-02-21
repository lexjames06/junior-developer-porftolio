import React from 'react';
import { useSelector } from 'react-redux';
import transition from '../../assets/transitions/picture-transition-dark.png';
import arrow from '../../assets/icons/arrow-green.svg'
import './Footer.css'

export default function Footer() {
    const darkMode = useSelector(state => state.darkMode);

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    return (
        <div className={`footer-outer-container${darkMode ? ' dark' : ''}`}>
            <img src={transition} alt='dark transition' />
            <div className='footer-inner-container'>
                <img 
                    src={arrow} 
                    alt='back to top button'
                    onClick={scrollToTop}
                />
                <h3>Back to Top</h3>
            </div>
        </div>
    );
}