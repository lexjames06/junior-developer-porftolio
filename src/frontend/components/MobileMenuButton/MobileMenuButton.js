import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/actions';
import './MobileMenuButton.css'

export default function MobileMenuButton() {
  const darkMode = useSelector(state => state.darkMode);
  const isMenuVisible = useSelector(state => state.menuVisible);
  const dispatch = useDispatch();

    return(
        <div className='hamburger' onClick={() => dispatch(toggleMenuVisibility())}>
          <div className={`hamburger-top${isMenuVisible ? ' bun-leave' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
          <div className={`hamburger-middle${isMenuVisible ? ' middle-rotate' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
          <div className={`hamburger-middle${isMenuVisible ? ' middle-rotate-anti' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
          <div className={`hamburger-bottom${isMenuVisible ? ' bun-leave' : '' }${darkMode ? ' hamburger-dark' : '' }`}></div>
        </div>
    );
}