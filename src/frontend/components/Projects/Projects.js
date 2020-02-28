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
    const [detailsVisible, setDetailsVisible] = useState(false);
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

    function toggleDetails() {
        setDetailsVisible(!detailsVisible);
    }

    function chooseProjectKodflix() {
        setProjectSelected(0);
    }

    function chooseProjectFit4You() {
        setProjectSelected(1);
    }

    function chooseProjectTBSW() {
        setProjectSelected(2);
    }

    function chooseProjectProjectSkeleton() {
        setProjectSelected(3);
    }

    let projects = [
        { 
            name: 'Kodflix', 
            description: "A Pseudo netflix web-application showing different clickable movie covers. Each movie has it's own page with details and a trailer.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: 'kodflix',
            image: kodflix
        },
        { 
            name: 'Fit-4-You', 
            description: "A passion project of mine, Fit-4-You will be a health and wellbeing mobile-app that gives users the most appropriate exercise and nutrition programme to meet their goals.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: 'fit-4-you',
            image: fit4you
        },
        { 
            name: 'The B-Side Word: Landing Page', 
            description: "A simple landing page for mobile devices to redirect users from facebook marketing through to the podcast.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: 'tbsw-landing-page',
            image: tbsw
        },
        { 
            name: 'Project Skeleton', 
            description: "A mobile-app built alongside colleagues at the Kodiri Bootcamp. Project Skeleton is the early stages of an open source social content management system.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3',
            github: 'project-skeleton',
            image: projectSkeleton
        }
    ];

    return (
        <div className={`projects-outer-container${darkMode ? ' dark' : ''}`}>
            <div className='green-transition'>
                <img id='green-transition' src={greenTransition} alt='' />
            </div>
            <div className={`projects-container${darkMode ? ' dark' : ''}`}>
            <a name='projects'><h1>Projects</h1></a>
                    {
                            <div className='project'>
                                <img 
                                    src={kodflix} 
                                    alt={projects[0].name}
                                    id='kodflix'
                                    className={`project-image${projectSelected === 3 ? ' right' : projectSelected === 2 ? ' super-right' : projectSelected === 1 ? ' left' : ' middle'}`}/>
                                <img 
                                    src={fit4you} 
                                    alt={projects[1].name}
                                    id='fit4you'
                                    className={`project-image${projectSelected === 0 ? ' right' : projectSelected === 3 ? ' super-right' : projectSelected === 2 ? ' left' : ' middle'}`}/>
                                <img 
                                    src={tbsw} 
                                    alt={projects[2].name}
                                    id='tbsw'
                                    className={`project-image${projectSelected === 1 ? ' right' : projectSelected === 0 ? ' super-right' : projectSelected === 3 ? ' left' : ' middle'}`}/>
                                <img 
                                    src={projectSkeleton} 
                                    alt={projects[3].name}
                                    id='projectSkeleton'
                                    className={`project-image${projectSelected === 2 ? ' right' : projectSelected === 1 ? ' super-right' : projectSelected === 0 ? ' left' : ' middle'}`}/>
                                <div className={`project-details${detailsVisible ? darkMode ? ' dark-clicked' : ' clicked' : ' light-mode'}`}>
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
                                        className={`project-selector web-back${detailsVisible ? ' details' : ''}`}
                                        onClick={toggleLeftProjectSelected}>
                                        <svg viewBox="0 0 15 24">
                                            <path d="M0,3l3.1-3L15,12L3.1,24L0,21l9-9L0,3z"/>
                                        </svg>
                                    </div>
                                    <div 
                                        className={`project-selector web-forward${detailsVisible ? ' details' : ''}`}
                                        onClick={toggleRightProjectSelected}>
                                        <svg viewBox="0 0 15 24">
                                            <path d="M0,3l3.1-3L15,12L3.1,24L0,21l9-9L0,3z"/>
                                        </svg>
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
                        <div className={`project-dot${projectSelected === 0 ? ' kodflix' : ''}`} onClick={chooseProjectKodflix}></div>
                        <div className={`project-dot${projectSelected === 1 ? ' fit-4-you' : ''}`} onClick={chooseProjectFit4You}></div>
                        <div className={`project-dot${projectSelected === 2 ? ' tbsw' : ''}`} onClick={chooseProjectTBSW}></div>
                        <div className={`project-dot${projectSelected === 3 ? ' project-skeleton' : ''}`} onClick={chooseProjectProjectSkeleton}></div>
                    </div>
                    <div 
                        className='project-selector mobile-forward'
                        onClick={toggleRightProjectSelected}>
                        <img src={arrowDark} alt='right arrow' />
                    </div>
                </div>
                <div className='project-links'>
                    <button className='details-link' onClick={() => toggleDetails()}><h5 id='details'>details</h5></button>
                    <a 
                        target='_blank' 
                        href={`https://github.com/lexjames06/${projects[projectSelected].github}`}
                        rel="noopener noreferrer"
                        className='github-link'>
                        <button><h5 id='github'>github</h5></button>
                    </a>
                    <a 
                        target='_blank' 
                        href={`http://${projectSelected === 0 ? 'kodflix-lj.herokuapp.com/kodflix' : projectSelected === 1 ? 'fit-4-you.now.sh' : projectSelected === 2 ? 'www.google.com' : 'www.google.com'}`}
                        rel="noopener noreferrer"
                        className='deployed-link'>
                        <button><h5 id='deployed'>live site</h5></button>
                    </a>
                </div>
            </div>
        </div>
    );
}