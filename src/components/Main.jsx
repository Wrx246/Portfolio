import React from 'react'
import '../styles/Main.scss'
import Window from '../UI/Window'
// import Window from '../assets/images/Frame 2.png'

const Main = () => {
    return (
        <div className='main'>
            {/* <img src={Window} alt="window" /> */}
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
    )
}

export default Main