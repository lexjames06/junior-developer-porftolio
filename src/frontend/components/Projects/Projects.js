import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Projects.css'

import kodflix from '../../assets/projects/kodflix.jpg'

export default function Projects() {
    const [kodflixDetailsVisible, setKodflixDetailsVisible] = useState(false);

    function toggleKodflixDetails() {
        setKodflixDetailsVisible(!kodflixDetailsVisible);
    }

    let projects = [
        { 
            name: 'Kodflix', 
            description: "A Psuedo netflix web-application showing different clickable movie covers. Each movie has it's own page with details and a trailer.",
            technologies: 'JavaScript, React, NodeJS, HTML5, CSS3'
        },
        // { 
        //     name: 'Kodflix', 
        //     description: "A Psuedo netflix web-application showing different clickable movie covers. Each movie has it's own page with details and a trailer.",
        //     technologies: 'JavaScript, React, NodeJS, HTML5, CSS3'
        // }
    ];

    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            {
                projects.map(({ name, description, technologies }) => (
                    <div className='project-window'>
                        <div className='project'>
                            <img src={kodflix} alt={name} />
                            <div className={`project-details${kodflixDetailsVisible ? ' project-details-clicked' : ''}`}>
                                <h3>{name}</h3>
                                <div className='description'>
                                    {description}
                                </div>
                                <div className='technologies'>
                                    <h5>{technologies}</h5>
                                </div>
                                <div className='project-overlay-bar' onClick={() => toggleKodflixDetails()}>
                                    <div className='triangle'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}