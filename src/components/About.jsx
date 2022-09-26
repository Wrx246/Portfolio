import React from 'react'
import { motion } from 'framer-motion'
import '../styles/About.scss'
import Photo from '../assets/images/image.png'

const About = () => {

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

    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ amount: .5, once: true }} className='about' id='about'>
            <article className='about_article'>
                <motion.h2 custom={2} variants={textAnimation}>ABOUT ME</motion.h2>
                <motion.p custom={3} variants={textAnimation}>
                    I am a frontend developer with expirience in building
                    Landing pages with responsive design, creating SPA using
                    React, Redux. Also I have interest in learning NodeJS.
                    Currently I’m investing all of my spare time to improve my
                    knowledge in code and my English.
                </motion.p>
            </article>
            <motion.img variants={imgAnimation} custom={1} src={Photo} alt="my photo" />
        </motion.div>
    )
}

export default About