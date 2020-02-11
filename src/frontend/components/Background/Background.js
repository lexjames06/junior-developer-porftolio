import React from 'react'
import transition from '../../assets/transitions/transition.png'
import pictureTransition from '../../assets/transitions/picture-transition.png'
import pictureTransitionDark from '../../assets/transitions/picture-transition-dark.png'
import javascript from '../../assets/icons/javascript.svg'
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import react from '../../assets/icons/react.svg'
import './Background.css'

export default function Background({ darkMode }) {
    return (
        <div>
            <div className='background'>
                <div className='white-transition'>
                    <img id='white-transition' src={`${darkMode ? pictureTransitionDark : pictureTransition}`} alt='' />
                </div>
                <div className='web-title'>
                    <h1 id='web-name'>Alexander '<span id='web-nickname'>LJ</span>' Stewart</h1>
                    <h1 id='web-job'>Junior Developer</h1>
                    <div className='underline'></div>
                    <div className='stack-icons'>
                        <span><img src={html} alt='' /><h3 id='icon-label'>HMTL5</h3></span>
                        <span><img src={css} alt='' /><h3 id='icon-label'>CSS3</h3></span>
                        <span><img src={javascript} alt='' /><h3 id='icon-label'>JavaScript</h3></span>
                        <span><img src={react} alt='' /><h3 id='icon-label'>React</h3></span>
                    </div>
                </div>
            </div>
            <div className='title'>
                <h1 id='name'>Alexander '<span id='nickname'>LJ</span>' Stewart</h1>
                <h1 id='job'>Junior Developer</h1>
                <div className='underline'></div>
                <div className='stack-icons-mobile'>
                        <span><img src={html} alt='' /><h3 id='icon-label'>HMTL5</h3></span>
                        <span><img src={css} alt='' /><h3 id='icon-label'>CSS3</h3></span>
                        <span><img src={javascript} alt='' /><h3 id='icon-label'>JavaScript</h3></span>
                        <span><img src={react} alt='' /><h3 id='icon-label'>React</h3></span>
                </div>
            </div>
            <div className='gold-transition'>
                <img id='gold-transition' src={transition} alt='' />
            </div>
            <div className='projects'></div>
        </div>
    );
}