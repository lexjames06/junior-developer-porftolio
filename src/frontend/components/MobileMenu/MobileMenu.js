import React from 'react'
import LightSwitch from '../LightSwitch/LightSwitch'
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/actions'
import headshot from '../../assets/images/headshot.png'
import email from'../../assets/icons/email.svg'
import github from'../../assets/icons/github.svg'
import linkedin from'../../assets/icons/linkedin.svg'
import blog from'../../assets/icons/blog.svg'
import youtube from'../../assets/icons/youtube.svg'
import './MobileMenu.css'

export default function MobileMenu() {
  const darkMode = useSelector(state => state.darkMode);
  const isMenuVisible = useSelector(state => state.menuVisible);
  const dispatch = useDispatch();

    return (
      <div className={`menu${isMenuVisible ? ' menu-visible' : '' }${darkMode ? ' menu-dark' : '' }`}>
        <div className='sidebar-close-menu' onClick={() => isMenuVisible ? dispatch(toggleMenuVisibility()) : ''}></div>
        <div className='menu-personal-details-container'>
          <div className='headshot'>
            <img src={headshot} alt='headshot' id='headshot' />
          </div>
          <div className={`menu-personal-title${darkMode ? ' menu-personal-title-dark' : '' }`}>
            <h3>Alexander Stewart</h3>
          </div>
          <div className='menu-personal-job'>
            <h4>Junior Developer</h4>
          </div>
        </div>
        <LightSwitch />
        <div className='menu-links'>
          <div className={`email-menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <div className='menu-link-icon email'>
              <img src={email} alt='email-icon' />
            </div>
            <a 
              target='_blank' 
              href='mailto: ajs.stewart@btinternet.com' 
              rel="noopener noreferrer" 
              id={`menu-link${darkMode ? '-dark' : ''}`}
              onClick={() => dispatch(toggleMenuVisibility())}
            >
              Email
            </a>
          </div>
          <div className={`github-menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <div className='menu-link-icon github'>
              <img src={github} alt='menu-icon' /> 
            </div>
            <a 
              target='_blank' 
              href='https://github.com/lexjames06' 
              rel="noopener noreferrer"
              id={`menu-link${darkMode ? '-dark' : ''}`}
              onClick={() => dispatch(toggleMenuVisibility())}
            >
              Github
            </a>
          </div>
          <div className={`linkedin-menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <div className='menu-link-icon linkedin'>
              <img src={linkedin} alt='linkedin-icon' />
            </div>
            <a 
              target='_blank' 
              href='https://www.linkedin.com/in/alexander-j-stewart/' 
              rel="noopener noreferrer"
              id={`menu-link${darkMode ? '-dark' : ''}`}
            >
              LinkedIn
            </a>
          </div>
          <div className={`blog-menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <div className='menu-link-icon blog'>
              <img src={blog} alt='blog-icon' />
            </div>
            <a 
              target='_blank' 
              href='https://dev.to/lexjames06/my-bootcamp-experience-week-1-5b26' 
              rel="noopener noreferrer"
              id={`menu-link${darkMode ? '-dark' : ''}`}
            >
              Blog
            </a>
          </div>
          <div className={`youtube-menu-link${darkMode ? ' menu-link-dark' : '' }`}>
            <div className='menu-link-icon youtube'>
              <img src={youtube} alt='youtube-icon' />
            </div>
            <a 
              target='_blank' 
              href='https://www.youtube.com/channel/UCCzqRcVvOvlr6UU8aye6eeg?view_as=subscriber' 
              rel="noopener noreferrer"
              id={`menu-link${darkMode ? '-dark' : ''}`}
            >
              YouTube
            </a>
          </div>
        </div>
        <div className='menu-logo'>
          <h3>LJ</h3>
        </div>
      </div>
    );
}