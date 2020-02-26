import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import greenTransition from '../../assets/transitions/transition.png'
import arrowDark from '../../assets/icons/arrow-dark.svg'
import webArrow from '../../assets/icons/web-arrow.svg'
import './Projects.css'

import kodflix from '../../assets/projects/kodflix.jpg'
import fit4you from '../../assets/projects/fit-4-you.png'
import tbsw from '../../assets/projects/tbsw.png'
import projectSkeleton from '../../assets/projects/project-skeleton.png'

export default function Projects() {
    const [kodflixDetailsVisible, setKodflixDetailsVisible] = useState(false);
    const [projectSelected, setProjectSelected] = useState(0);

    const darkMode = useSelector(state => state.darkMode);

    function toggleRightProjectSelected() {
        projectSelected < 3 ?
            setProjectSelected(projectSelected + 1) :
            setProjectSelected(0);
    }

    function toggleLeftProjectSelected() {
        projectSelected > 0 ?
            setProjectSelected(projectSelected - 1) :
            setProjectSelected(3);
    }

    function toggleKodflixDetails() {
        setKodflixDetailsVisible(!kodflixDetailsVisible);
    }

    let projects = [
        { 
            name: 'Kodflix', 
            description: "A Pseudo netflix web-application showing different clickable movie covers. Each movie has it's own page with details and a trailer.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: '',
            image: kodflix
        },
        { 
            name: 'Fit-4-You', 
            description: "A passion project of mine, Fit-4-You will be a health and wellbeing mobile-app that gives users the most appropriate exercise and nutrition programme to meet their goals.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: '',
            image: fit4you
        },
        { 
            name: 'The B-Side Word: Landing Page', 
            description: "A simple landing page for mobile devices to redirect users from facebook marketing through to the podcast.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: '',
            image: tbsw
        },
        { 
            name: 'Project Skeleton', 
            description: "A mobile-app built alongside colleagues at the Kodiri Bootcamp. Project Skeleton is the early stages of an open source social content management system.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: '',
            image: projectSkeleton
        }
    ];

    return (
        <div className={`projects-outer-container${darkMode ? ' dark' : ''}`}>
            <div className='green-transition'>
                <img id='green-transition' src={greenTransition} alt='' />
            </div>
            <div className={`projects-container${darkMode ? ' dark' : ''}`}>
                <h1>Projects</h1>
                    {
                        <div className='project'>
                            <img 
                                src={kodflix} 
                                alt={projects[0].name}
                                id='kodflix'
                                className={`project-image${projectSelected === 3 ? ' right' : projectSelected === 2 ? ' behind' : projectSelected === 1 ? ' left' : ' middle'}`}/>
                            <img 
                                src={fit4you} 
                                alt={projects[1].name}
                                id='fit4you'
                                className={`project-image${projectSelected === 0 ? ' right' : projectSelected === 3 ? ' behind' : projectSelected === 2 ? ' left' : ' middle'}`}/>
                            <img 
                                src={tbsw} 
                                alt={projects[2].name}
                                id='tbsw'
                                className={`project-image${projectSelected === 1 ? ' right' : projectSelected === 0 ? ' behind' : projectSelected === 3 ? ' left' : ' middle'}`}/>
                            <img 
                                src={projectSkeleton} 
                                alt={projects[3].name}
                                id='projectSkeleton'
                                className={`project-image${projectSelected === 2 ? ' right' : projectSelected === 1 ? ' behind' : projectSelected === 0 ? ' left' : ' middle'}`}/>
                            <div className={`project-details${kodflixDetailsVisible ? darkMode ? ' dark-clicked' : ' clicked' : ' light-mode'}`}>
                                <h3>{projects[projectSelected].name}</h3>
                                <div className={`description${darkMode ? ' dark' : ' light'}`}>
                                    {projects[projectSelected].description}
                                </div>
                                <div className='technologies'>
                                    <h5>{projects[projectSelected].technologies}</h5>
                                </div>
                            </div>
                            <div className='web-project-selectors'>
                                <div 
                                    className='project-selector web-back'
                                    onClick={toggleLeftProjectSelected}>
                                    <img src={webArrow} alt='right arrow' />
                                </div>
                                <div 
                                    className='project-selector web-forward'
                                    onClick={toggleRightProjectSelected}>
                                    <img src={webArrow} alt='right arrow' />
                                </div>
                            </div>
                        </div>
                    }
                <div className='mobile-project-selectors'>
                    <div 
                        className='project-selector mobile-back'
                        onClick={toggleLeftProjectSelected}>
                        <img src={arrowDark} alt='right arrow' />
                    </div>
                    <div className='project-selector-dots mobile'>
                        <div className={`project-dot${projectSelected === 0 ? ' kodflix' : ''}`}></div>
                        <div className={`project-dot${projectSelected === 1 ? ' fit-4-you' : ''}`}></div>
                        <div className={`project-dot${projectSelected === 2 ? ' tbsw' : ''}`}></div>
                        <div className={`project-dot${projectSelected === 3 ? ' project-skeleton' : ''}`}></div>
                    </div>
                    <div 
                        className='project-selector mobile-forward'
                        onClick={toggleRightProjectSelected}>
                        <img src={arrowDark} alt='right arrow' />
                    </div>
                </div>
                <div className='project-links'>
                    <button className='details-link' onClick={() => toggleKodflixDetails()}><h5 id='details'>details</h5></button>
                    <a 
                        target='_blank' 
                        href='https://github.com/lexjames06/kodflix' 
                        rel="noopener noreferrer"
                        className='github-link'>
                        <button><h5 id='github'>github</h5></button>
                    </a>
                    <a 
                        target='_blank' 
                        href='http://kodflix-lj.herokuapp.com/kodflix' 
                        rel="noopener noreferrer"
                        className='deployed-link'>
                        <button><h5 id='deployed'>live site</h5></button>
                    </a>
                </div>
            </div>
        </div>
    );
}