import React from 'react'
import { motion } from 'framer-motion'
import '../styles/UI/Window.scss'
import { forwardRef } from 'react'

export const Window = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='window'>
            <div className='window_head'>
                <div className='window_buttons'>
                    <div className='window_close' />
                    <div className='window_size' />
                    <div className='window_minimize' />
                </div>
                <div className='window_input'>MaksimKuzmianok.com</div>
            </div>
            <article>
                <p>
                    Person &#123;<br />
                    <span>Name:</span> Maksim;<br />
                    <span>LastName:</span> Kuzmianok;<br />
                    <span>PersonType:</span> Frontend Developer;<br />
                    &#125;
                </p>
                <p>
                    Knowledge &#123;<br />
                    <span>Language:</span> JavaScript;<br />
                    <span>Framework:</span> React;<br />
                    &#125;
                </p>
            </article>
        </div>
    )
})

export const MWindow = motion(Window)