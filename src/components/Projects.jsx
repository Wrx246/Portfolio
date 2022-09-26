import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Scroll from 'react-scroll'
import '../styles/Projects.scss'
import ProjectCard from '../UI/ProjectCard'
import { projectItems } from '../data'
import ArrowUp from '../assets/images/Arrow up.png'
import ArrowRight from '../assets/images/arrow-right.png'
import ArrowLeft from '../assets/images/arrow-left.png'

const Projects = () => {
    const [width, setWidth] = useState(0);
    const [move, setMove] = useState(false)
    // const [pages, setPages] = useState([])
    // const [offset, setOffset] = useState(0)
    const sliderRef = useRef();

    const PAGE_WIDTH = 371

    useEffect(() => {
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
    }, [])

    const scrollTop = (e) => {
        e.preventDefault();
        const scroll = Scroll.animateScroll;
        scroll.scrollToTop()
    }

    // const onLeftClick = (e) => {
    //     e.preventDefault();
    //     setOffset((currentOffset) => {
    //         const newOffset = currentOffset + PAGE_WIDTH
    //         return Math.min(newOffset, 0)
    //       })
    // }

    // const onRightClick = (e) => {
    //     e.preventDefault();
    //     setOffset((currentOffset) => {
    //         const newOffset = currentOffset - PAGE_WIDTH
    //         const maxOffset = -(PAGE_WIDTH * (projectItems.length - 1))
    //         return Math.max(newOffset, maxOffset)
    //       })
    // }

    return (
        <div className='projects' id='projects'>
            <div className='projects_wrapper'>
                <h2>PROJECTS</h2>
                {/* <button onClick={onLeftClick} className='button_left' type='button'><img src={ArrowLeft} alt='left arrow' /></button> */}
                <motion.div
                    // whileTap={{ cursor: 'grabbing' }}
                    ref={sliderRef}
                    className='project_slider'>
                    <motion.div
                        // drag="x"
                        // style={{
                        //     transform: `translateX(${offset}px)`,
                        //   }}
                        // animate={{ x: [0, -width, -width, 0] }}
                        // transition={{ repeat: Infinity, type: 'tween', duration: 20 }}
                        // dragConstraints={{ right: 0, left: -width }}
                        className='projects_list'>
                        {projectItems.map((project, index) => {
                            return (
                                <ProjectCard key={index} project={project} />
                            )
                        })}
                    </motion.div>
                </motion.div>
                {/* <button onClick={onRightClick} className='button_right' type='button'><img src={ArrowRight} alt='right arrow' /></button> */}
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