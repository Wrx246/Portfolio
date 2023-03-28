import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Scroll from 'react-scroll'
import '../styles/Projects.scss'
import ProjectCard from '../UI/ProjectCard'
import { projectItems } from '../assets/data/data'
import ArrowUp from '../assets/images/Arrow up.png'
import ArrowRight from '../assets/images/arrow-right.png'
import ArrowLeft from '../assets/images/arrow-left.png'

const Projects = () => {
    const [width, setWidth] = useState(0);
    const [arrowDisable, setArrowDisable] = useState(true);
    const sliderRef = useRef();

    useEffect(() => {
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
    }, [])

    const scrollTop = (e) => {
        e.preventDefault();
        const scroll = Scroll.animateScroll;
        scroll.scrollToTop()
    }

    const handleHorizontalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };

    return (
        <div className='projects' id='projects'>
            <div className='projects_wrapper'>
                <h2>PROJECTS</h2>
                <button onClick={() => {
                    handleHorizontalScroll(sliderRef.current, 25, 260, -10)
                }}
                    disabled={arrowDisable === true}
                    className='button_left' type='button'>
                    <img src={ArrowLeft} alt='left arrow' />
                </button>
                <motion.div
                    ref={sliderRef}
                    className='project_slider'>
                    <motion.div
                        className='projects_list'>
                        {projectItems.map((project, index) => {
                            return (
                                <ProjectCard key={index} project={project} />
                            )
                        })}
                    </motion.div>
                </motion.div>
                <button onClick={() => {
                    handleHorizontalScroll(sliderRef.current, 25, 260, 10)
                }}
                    className='button_right' type='button'>
                    <img src={ArrowRight} alt='right arrow' />
                </button>
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