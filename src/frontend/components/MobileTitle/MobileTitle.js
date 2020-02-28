import React from 'react';
import { useSelector } from 'react-redux';
import pictureTransition from '../../assets/transitions/picture-transition.png'
import pictureTransitionDark from '../../assets/transitions/picture-transition-black.png'
import javascript from '../../assets/icons/javascript.svg'
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import react from '../../assets/icons/react.svg'
import javascriptLight from '../../assets/icons/javascript-light.svg'
import htmlLight from '../../assets/icons/html-light.svg'
import cssLight from '../../assets/icons/css-light.svg'
import reactLight from '../../assets/icons/react-light.svg'
import redux from '../../assets/icons/redux.svg';
import firebase from '../../assets/icons/firebase.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import reduxLight from '../../assets/icons/redux-light.svg';
import firebaseLight from '../../assets/icons/firebase-light.svg';
import nodejsLight from '../../assets/icons/nodejs-light.svg';
import './MobileTitle.css'

export default function MobileTitle() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <div className={`title${darkMode ? ' title-dark' : ''}`}>
            <div className='picture-transition'>
                <img id='picture-transition' src={`${darkMode ? pictureTransitionDark : pictureTransition}`} alt='' />
            </div>
            <h1 id='name'>Alexander '<span id='nickname'>LJ</span>' Stewart</h1>
            <h1 id='job'>Junior Developer</h1>
            <div className={`underline${darkMode ? ' dark' : ''}`}></div>
            <div className='stack-icons-mobile'>
                    <span><img src={`${darkMode ? javascriptLight : javascript}`} alt='' /><h3 id='icon-label'>JavaScript</h3></span>
                    <span><img src={`${darkMode ? reactLight : react}`} alt='' /><h3 id='icon-label'>React</h3></span>
                    <span><img src={`${darkMode ? nodejsLight : nodejs}`} alt='' /><h3 id='icon-label'>NodeJS</h3></span>
                    <span><img src={`${darkMode ? reduxLight : redux}`} alt='' /><h3 id='icon-label'>Redux</h3></span>
            </div>
            <div className='stack-icons-mobile second-row'>
                <span className='stack-icon'><img src={`${darkMode ? firebaseLight : firebase}`} alt='' /><h3 id='icon-label'>Firebase</h3></span>
                <span className='stack-icon'><img src={`${darkMode ? htmlLight : html}`} alt='' /><h3 id='icon-label'>HTML5</h3></span>
                <span className='stack-icon'><img src={`${darkMode ? cssLight : css}`} alt='' /><h3 id='icon-label'>CSS3</h3></span>
            </div>
        </div>
    );
}