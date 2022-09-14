import React from 'react'
import '../styles/Header.scss'
import BurgerButton from '../UI/BurgerButton'

const Header = () => {
    return (
        <div className='header_wrapper'>
            <div className='burger'>
                <BurgerButton />
            </div>
            <ul className='header_nav'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contacts</a></li>
            </ul>
        </div>
    )
}

export default Header