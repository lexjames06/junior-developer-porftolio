import React from 'react'
import { useSelector } from 'react-redux'
import darkTransition from '../../assets/transitions/picture-transition-dark.png'
import podcast from '../../assets/icons/podcast.svg'
import basketball from '../../assets/icons/basketball.svg'
import math from '../../assets/icons/math.svg'
import fitness from '../../assets/icons/fitness.svg'
import './AboutMe.css'

export default function AboutMe() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <div className={`about-me-outer-container${darkMode ? ' dark' : ''}`}>
            <div className='about-me-transition'>
                <img src={darkTransition} alt='' />
            </div>
            <div className={`about-me-inner-container${darkMode ? ' dark' : ''}`}>
                <h1>About Me</h1>
                <p>
                    Basketball is my first love. 
                    It has brought many tears of joy and disappointment,
                    and even afforded me the opportunity to live in Iceland and 
                    receive a scholarship to university in Florida. I'm also a Boston Celtics fan!
                </p>
                <img src={basketball} alt='basketball icon' />
                <p>
                    Since Aug 2018, I've been a part of a podcast with a group of friends
                    from around the world. We discuss interesting articles in the news
                    and share our thoughts and opinions.
                </p>
                <img src={podcast} alt='radio-mast icon' />
                {/* <div className='attributes'>
                    <div id='code-one'>{".about-me-inner-container img {"}</div>
                    <div id='code-two'>{"width: 15%;"}</div>
                    <div id='code-three'>{"align-self: center;"}</div>
                </div> */}
                <p id='fitness-bio'>
                    After I finished playing basketball, I fell in love with health and fitness.
                    I've completed multiple Strength & Conditioning internships and become a 
                    qualified Personal Trainer. All for the love of it as a hobby.
                </p>
                <img src={fitness} alt='heart-rate over heart icon' />
                <p>
                    I love to solve problems!
                    Studying maths at university wasn't enough; if I can find a riddle or logic
                    problem to solve in my spare time, I will!
                </p>
                <img src={math} alt='chalkboard icon' />
            </div>
        </div>
    );
}