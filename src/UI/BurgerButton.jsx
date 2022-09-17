import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/UI/BurgerButton.scss'


const BurgerButton = () => {
    const settings = {
        spy: true,
        smooth: true,
        offset: 50,
        duration: 500,
    }
    const [burger, setBurger] = useState(false);

    const rootStyle = ['burger__body']
    const topStyle = ['top__bun']
    const meatStyle = ['meat']
    const botStyle = ['bottom__bun']

    if (burger) {
        rootStyle.push('active')
        topStyle.push('activeTop')
        meatStyle.push('activeMeat')
        botStyle.push('activeBot')
    }

    const handleClick = (e) => {
        e.preventDefault();
        setBurger(!burger)
    }

    const linksArray = [
        { link: 'main', name: 'Home' },
        { link: 'about', name: 'About' },
        { link: 'projects', name: 'Projects' },
        { link: 'contacts', name: 'Contacts' },
    ]

    return (
        <div>
            <div onClick={handleClick}>
                <div className={topStyle.join(' ')}></div>
                <div className={meatStyle.join(' ')}></div>
                <div className={botStyle.join(' ')}></div>
            </div>
            <ul className={rootStyle.join(' ')}>
                {linksArray.map((item) => {
                    return (
                        <li>
                            <Link
                                to={item.link}
                                {...settings}
                                className='navbar__item'
                                onClick={() => setBurger(false)}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BurgerButton