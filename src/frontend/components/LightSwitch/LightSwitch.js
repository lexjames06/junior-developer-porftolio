import React from 'react'
import sun from '../../assets/icons/sun.svg'
import moon from '../../assets/icons/moon.svg'
import './LightSwitch.css'

export default function LightSwitch({ darkMode, toggleDarkMode }) {
    return (
      <div className={`Toggle ${darkMode ? 'ToggleDark' : '' }`} onClick={toggleDarkMode}>
        <div className='LightSwitchIcons'>
          <div className='Sun'>
            <img id='Sun' src={sun} alt='' />
          </div>
          <div className='Moon'>
            <img id='Moon' src={moon} alt='' />
          </div>
        </div>
        <div className={`Switch ${darkMode ? 'SwitchOff' : '' }`}></div>
      </div>
    );
}