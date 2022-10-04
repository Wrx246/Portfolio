import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Header.scss'
import BurgerButton from '../UI/BurgerButton'

const Header = () => {
    const settings = {
        spy: true,
        smooth: true,
        // offset: 50,
        duration: 500,
    }
    return (
        <div className='header_wrapper'>
            <div className='burger'>
                <BurgerButton />
            </div>
            <ul className='header_nav'>
                <li><Link to='main' {...settings}>Home</Link></li>
                <li><Link to='about' {...settings}>About</Link></li>
                <li><Link to='projects' {...settings}>Projects</Link></li>
                <li><Link to='contacts' {...settings}>Contacts</Link></li>
            </ul>
        </div>
    )
}

export default Header