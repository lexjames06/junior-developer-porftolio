import React from 'react'
import MobileTitle from '../MobileTitle/MobileTitle'
import WebTitle from '../WebTitle/WebTitle'
import backgroundImage from '../../assets/images/background.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuVisibility } from '../../redux/actions'
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
            <div className='projects'></div>
        </div>
    );
}