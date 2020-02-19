import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/actions';
import './MobileMenuButtonHeader.css'

export default function MobileMenuButtonHeader() {
  const darkMode = useSelector(state => state.darkMode);
  const isMenuVisible = useSelector(state => state.menuVisible);
  const dispatch = useDispatch();

  return(
    <div className='hamburger-menu-container'>
      <div className='hamburger-menu' onClick={() => dispatch(toggleMenuVisibility())}>
        <div className={`hamburger-top-menu${isMenuVisible ? ' hamburger-hide' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
        <div className={`hamburger-bottom-menu${isMenuVisible ? ' hamburger-hide' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
        <div className={`hamburger-middle-menu${isMenuVisible ? ' middle-rotate-menu' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
        <div className={`hamburger-middle-menu${isMenuVisible ? ' middle-rotate-anti-menu' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
      </div>
    </div>
    );
}