import React, { useState } from 'react'
import MobileTitle from '../MobileTitle/MobileTitle'
import WebTitle from '../WebTitle/WebTitle'
import backgroundImage from '../../assets/images/background.jpg'
import Projects from '../Projects/Projects'
import './Background.css'

export default function Background() {

    return (
        <div>
            <div className='background'>
                <div className='background-image-outer-container'>
                    <div className='background-image-inner-container'>
                        <img src={backgroundImage} alt='background' id='background-image' />
                    </div>
                </div>
                <WebTitle />
            </div>
            <MobileTitle />
            <Projects />
        </div>
    );
}