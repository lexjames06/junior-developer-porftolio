import React from 'react'
import LightSwitch from '../LightSwitch/LightSwitch'
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/actions'
import './MobileMenu.css'

export default function MobileMenu() {
  const darkMode = useSelector(state => state.darkMode);
  const isMenuVisible = useSelector(state => state.menuVisible);
  const dispatch = useDispatch();

    return (
      <div className={`menu${isMenuVisible ? ' menu-visible' : '' }${darkMode ? ' menu-dark' : '' }`}>
        <div className='close-menu' onClick={() => isMenuVisible ? dispatch(toggleMenuVisibility()) : ''}></div>
        <LightSwitch />
        <div className='menu-links'>
          <div className={`menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <a 
              target='_blank' 
              href='mailto: ajs.stewart@btinternet.com' 
              rel="noopener noreferrer" 
              id={`${darkMode ? 'menu-link-dark' : 'menu-link'}`}
              onClick={() => dispatch(toggleMenuVisibility())}
            >
              Email
            </a>
          </div>
          <div className={`menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <a 
              target='_blank' 
              href='https://github.com/lexjames06' 
              rel="noopener noreferrer"
              id={`${darkMode ? 'menu-link-dark' : 'menu-link'}`}
              onClick={() => dispatch(toggleMenuVisibility())}
            >
              Github
            </a>
          </div>
          <div className={`menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <a 
              target='_blank' 
              href='https://www.linkedin.com/in/alexander-j-stewart/' 
              rel="noopener noreferrer"
              id={`${darkMode ? 'menu-link-dark' : 'menu-link'}`}
            >
              LinkedIn
            </a>
          </div>
          <div className={`menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <a 
              target='_blank' 
              href='https://dev.to/lexjames06/my-bootcamp-experience-week-1-5b26' 
              rel="noopener noreferrer"
              id={`${darkMode ? 'menu-link-dark' : 'menu-link'}`}
            >
              Blog
            </a>
          </div>
          <div className={`menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <a 
              target='_blank' 
              href='https://www.youtube.com/channel/UCCzqRcVvOvlr6UU8aye6eeg?view_as=subscriber' 
              rel="noopener noreferrer"
              id={`${darkMode ? 'menu-link-dark' : 'menu-link' }`}
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    );
}