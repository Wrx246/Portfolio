import React from 'react'
import Scroll  from 'react-scroll'
import { motion } from 'framer-motion'
import '../styles/Main.scss'
import {MWindow} from '../UI/Window'
import ArrowDown from '../assets/images/Arrow down.png'

const Main = () => {

    const textAnimation = {
        hidden: {
            opacity: 0,
            x: -500
        },
        visible: custom => ({
            opacity: 1,
            x: 0,
            transition: { delay: custom * .2 }
        }),
    }

    const imgAnimation = {
        hidden: {
            opacity: 0,
            y: -500
        },
        visible: custom => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * .2
            }
        }),
    }

    const options = {
        duration: 1500,
        smooth: true,
    }

    const scrollDown = (e) => {
        e.preventDefault();
        const scroll = Scroll.animateScroll;
        // scroll.scrollToBottom()
        scroll.scrollTo(window.innerHeight, options)
    }

    return (
        <div initial='hidden' whileInView='visible' viewport={{ amount: .5, once: true }} className='main' id='main'>
            <motion.div initial='hidden' whileInView='visible' viewport={{ amount: .5, once: true }} className='main_wrapper'>
                <MWindow custom={1} variants={imgAnimation} />
                <motion.div custom={2} variants={textAnimation} className='main_title'>
                    <h1>Hello, This is Maksim Kuzmianok</h1>
                    <p>
                        I am a frontend developer. I like creating websites
                        and in each of my projects I try to show all my
                        experience at its best.
                    </p>
                </motion.div>

            </motion.div>
            <div className='main_scroll' onClick={scrollDown}>
                <div className='scroll_img'>
                    <img src={ArrowDown} alt="arrow down" />
                </div>
                <span>see more</span>
            </div>
        </div>
    )
}

export default Main