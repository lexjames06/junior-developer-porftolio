import React from 'react';
import { useSelector } from 'react-redux';
import pictureTransition from '../../assets/transitions/picture-transition.png'
import pictureTransitionDark from '../../assets/transitions/picture-transition-dark.png'
import goldTransition from '../../assets/transitions/transition.png'
import javascript from '../../assets/icons/javascript.svg'
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import react from '../../assets/icons/react.svg'
import './MobileTitle.css'

export default function MobileTitle() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <div className={`title${darkMode ? ' title-dark' : ''}`}>
            <div className='white-transition'>
                <img id='white-transition' src={`${darkMode ? pictureTransitionDark : pictureTransition}`} alt='' />
            </div>
            <h1 id='name'>Alexander '<span id='nickname'>LJ</span>' Stewart</h1>
            <h1 id='job'>Junior Developer</h1>
            <div className='underline'></div>
            <div className='stack-icons-mobile'>
                    <span><img src={html} alt='' /><h3 id='icon-label'>HMTL5</h3></span>
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