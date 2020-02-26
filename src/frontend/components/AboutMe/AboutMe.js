import React from 'react'
import { useSelector } from 'react-redux'
import darkTransition from '../../assets/transitions/picture-transition-dark.png'
import podcast from '../../assets/icons/podcast.svg'
import basketball from '../../assets/icons/basketball.svg'
import math from '../../assets/icons/math.svg'
import fitness from '../../assets/icons/fitness.svg'
import laptop from '../../assets/icons/laptop.svg'
import './AboutMe.css'

export default function AboutMe() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <div className={`about-me-outer-container${darkMode ? ' dark' : ''}`}>
            <div className='about-me-transition'>
                <img src={darkTransition} alt='' />
            </div>
            <div className={`about-me-inner-container${darkMode ? ' dark' : ''}`}>
                <div className='about-me-title'>
                    <h1>About Me</h1>
                </div>
                <div className='coding-bio'>
                    <p>
                        Discovering coding has been a injection of passion into my life.
                        I haven't felt this drawn towards something since I stopped playing
                        basketball. It's something I truly enjoy learning, and look forward
                        to building a career and impactful technology!
                    </p>
                
                    <img src={laptop} alt='laptop icon' />
                </div>
                <div className='basketball-bio'>
                    <p>
                        Basketball is my first love. 
                        It has brought many tears of joy and disappointment,
                        and even afforded me the opportunity to live in Iceland and 
                        receive a scholarship to university in Florida. I'm also a Boston Celtics fan!
                    </p>
                
                    <img src={basketball} alt='basketball icon' />
                </div>
                <div className='podcast-bio'>
                    <p>
                        Since Aug 2018, I've been a part of a podcast with a group of friends
                        from around the world. We discuss interesting articles in the news
                        and share our thoughts and opinions.
                    </p>
                    <img src={podcast} alt='radio-mast icon' />
                </div>
                <div className='fitness-bio'>
                    <p id='fitness-bio'>
                        After I finished playing basketball, I fell in love with health and fitness.
                        I've completed multiple Strength & Conditioning internships and become a 
                        qualified Personal Trainer. All for the love of it as a hobby.
                    </p>
                    <img src={fitness} alt='heart-rate over heart icon' />
                </div>
                <div className='math-bio'>
                    <p>
                        I love to solve problems!
                        Studying maths at university wasn't enough; if I can find a riddle or logic
                        problem to solve in my spare time, I will!
                    </p>
                    <img src={math} alt='chalkboard icon' />
                </div>
            </div>
        </div>
    );
}