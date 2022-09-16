import React from 'react'
import Scroll  from 'react-scroll'
import '../styles/Main.scss'
import Window from '../UI/Window'
import ArrowDown from '../assets/images/Arrow down.png'

const Main = () => {

    const scrollDown = (e) => {
        e.preventDefault();
        const scroll = Scroll.animateScroll;
        scroll.scrollToBottom()
    }
    return (
        <div className='main' id='main'>
            <div className='main_wrapper'>
                <Window />
                <div className='main_title'>
                    <h1>Hello, This is Maksim Kuzmianok</h1>
                    <p>
                        I am a frontend developer. I like creating websites
                        and in each of my projects I try to show all my
                        experience at its best.
                    </p>
                </div>

            </div>
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