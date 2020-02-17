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
            <div className='underline'></div>
            <div className='stack-icons'>
                <span><img src={html} alt='' /><h3 id='icon-label'>HTML5</h3></span>
                <span><img src={css} alt='' /><h3 id='icon-label'>CSS3</h3></span>
                <span><img src={javascript} alt='' /><h3 id='icon-label'>JavaScript</h3></span>
                <span><img src={react} alt='' /><h3 id='icon-label'>React</h3></span>
            </div>
            <div className='gold-transition'>
                <img id='gold-transition' src={goldTransition} alt='' />
            </div>
        </div>
    );
}