import React from 'react'
import LightSwitch from '../LightSwitch/LightSwitch'
import './MobileMenu.css'

export default function MobileMenu({ menuVisible, darkMode, toggleDarkMode }) {
    return (
      <div className={`menu${menuVisible ? ' menu-visible' : '' }${darkMode ? ' menu-dark' : '' }`}>
        <LightSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className={`menu-links${darkMode ? ' menu-links-dark' : '' }`}>
          <div className='menu-link'>
            <a 
              target='_blank' 
              href='mailto: ajs.stewart@btinternet.com' 
              rel="noopener noreferrer" 
              className={`email${darkMode ? ' email-dark' : '' }`}
            >
              Email
            </a>
          </div>
          <div className='menu-link'>
            <a 
              target='_blank' 
              href='https://github.com/lexjames06' 
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div>
            <a 
              className='menu-link'
              target='_blank' 
              href='https://www.linkedin.com/in/alexander-j-stewart/' 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className='menu-link'>
            <a 
              target='_blank' 
              href='https://dev.to/lexjames06/my-bootcamp-experience-week-1-5b26' 
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
          <div className='menu-link'>
            <a 
              target='_blank' 
              href='https://www.youtube.com/channel/UCCzqRcVvOvlr6UU8aye6eeg?view_as=subscriber' 
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    );
}