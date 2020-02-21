import React from 'react';
import goldTransition from '../../assets/transitions/transition.png';
import javascript from '../../assets/icons/javascript.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import react from '../../assets/icons/react.svg';
import './WebTitle.css';

export default function WebTitle() {
    return (
        <div className='web-title'>
            <h1 id='web-name'>Alexander '<span id='web-nickname'>LJ</span>' Stewart</h1>
            <h1 id='web-job'>Junior Developer</h1>
            <div className='underline-web'></div>
            <div className='stack-icons-web'>
                <span className='stack-icon'><img src={html} alt='' /><h3 id='icon-label-web'>HTML5</h3></span>
                <span className='stack-icon'><img src={css} alt='' /><h3 id='icon-label-web'>CSS3</h3></span>
                <span className='stack-icon'><img src={javascript} alt='' /><h3 id='icon-label-web'>JavaScript</h3></span>
                <span className='stack-icon'><img src={react} alt='' /><h3 id='icon-label-web'>React</h3></span>
            </div>
        </div>
    );
}