import React from 'react'
import '../styles/UI/ProjectCard.scss'


const ProjectCard = ({ project }) => {
    return (
        <div className='card_wrapper'>
            <a href='#'>
                <img src={project.gif} alt='project photo' />
            </a>
            <div className='card_text'>
                <a href={project.link} target="_blank">{project.name}</a>
                <p>{project.text}</p>
                <p>{project.tech}</p>
            </div>
        </div>
    )
}

export default ProjectCard