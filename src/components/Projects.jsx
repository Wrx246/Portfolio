import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Scroll  from 'react-scroll'
import '../styles/Projects.scss'
import ProjectCard from '../UI/ProjectCard'
import { projectItems } from '../data'
import ArrowUp from '../assets/images/Arrow up.png'

const Projects = () => {
    const [width, setWidth] = useState(0);
    const sliderRef = useRef();

    useEffect(() => {
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
    }, [])

    const scrollTop = (e) => {
        e.preventDefault();
        const scroll = Scroll.animateScroll;
        scroll.scrollToTop()
    }

    return (
        <div className='projects' id='projects'>
            <div className='projects_wrapper'>
                <h2>PROJECTS</h2>
                <motion.div 
                whileTap={{cursor: 'grabbing'}}
                ref={sliderRef} 
                className='project_slider'>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className='projects_list'>
                        {projectItems.map((project) => {
                            return (
                                <ProjectCard project={project} />
                            )
                        })}
                    </motion.div>
                </motion.div>
                <div className='back_scroll' onClick={scrollTop}>
                    <div className='back_img'>
                        <img src={ArrowUp} alt="arrow up" />
                    </div>
                    <span>back to top</span>
                </div>
            </div>
        </div>
    )
}

export default Projects