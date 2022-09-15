import React from 'react'
import '../styles/About.scss'
import Photo from '../assets/images/image.png'

const About = () => {
    return (
        <div className='about'>
            <article className='about_article'>
                <h2>ABOUT ME</h2>
                <p>
                    I am a frontend developer with expirience in building
                    Landing pages with responsive design, creating SPA using
                    React, Redux. Also I have interest in learning NodeJS.
                    Currently I’m investing all of my spare time to improve my
                    knowledge in code and my English.
                </p>
            </article>
            <img src={Photo} alt="my photo" />
        </div>
    )
}

export default About