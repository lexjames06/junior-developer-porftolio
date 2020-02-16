import React from 'react'
import sun from '../../assets/icons/sun.svg'
import moon from '../../assets/icons/moon.svg'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../redux/actions';
import './LightSwitch.css'

export default function LightSwitch() {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

    return (
      <div className='ToggleContainer'>
        <div className={`Toggle ${darkMode ? 'ToggleDark' : '' }`} onClick={() => dispatch(toggleDarkMode())}>
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
      </div>
    );
}