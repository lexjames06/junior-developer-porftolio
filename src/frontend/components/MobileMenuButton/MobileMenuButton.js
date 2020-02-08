import React from 'react'
import './MobileMenuButton.css'

export default function MobileMenuButton({ darkMode, menuVisible, toggleMenuVisible }) {
    return(
        <div className='hamburger' onClick={toggleMenuVisible}>
          <div className={`hamburger-top${menuVisible ? ' bun-leave' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
          <div className={`hamburger-middle${menuVisible ? ' middle-rotate' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
          <div className={`hamburger-middle${menuVisible ? ' middle-rotate-anti' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
          <div className={`hamburger-bottom${menuVisible ? ' bun-leave' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
        </div>
    );
}