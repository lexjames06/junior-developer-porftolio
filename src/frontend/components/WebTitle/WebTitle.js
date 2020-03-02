import React from 'react';
import javascript from '../../assets/icons/javascript.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import react from '../../assets/icons/react.svg';
import redux from '../../assets/icons/redux.svg';
import firebase from '../../assets/icons/firebase.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import './WebTitle.css';

export default function WebTitle() {
    return (
        <div className='web-title'>
            <h1 id='web-name'>Alexander '<span id='web-nickname'>LJ</span>' Stewart</h1>
            <h1 id='web-job'>Junior Developer</h1>
            <div className='nav-buttons'>
                <a href='#about'><button><h2>About</h2></button></a>
                <a href='#projects'><button><h2>Projects</h2></button></a>
                <a href='#contact'><button><h2>Contact</h2></button></a>
            </div>
            <div className='underline-web'></div>
            <div className='stack-icons-web'>
                <span className='stack-icon'><img src={javascript} alt='' /><h3 id='icon-label-web'>JavaScript</h3></span>
                <span className='stack-icon'><img src={react} alt='' /><h3 id='icon-label-web'>React</h3></span>
                <span className='stack-icon'><img src={nodejs} alt='' /><h3 id='icon-label-web'>NodeJS</h3></span>
                <span className='stack-icon'><img src={redux} alt='' /><h3 id='icon-label-web'>Redux</h3></span>
            </div>
            <div className='stack-icons-web second-row'>
                <span className='stack-icon'><img src={firebase} alt='' /><h3 id='icon-label-web'>Firebase</h3></span>
                <span className='stack-icon'><img src={html} alt='' /><h3 id='icon-label-web'>HTML5</h3></span>
                <span className='stack-icon'><img src={css} alt='' /><h3 id='icon-label-web'>CSS3</h3></span>
            </div>
        </div>
    );
}