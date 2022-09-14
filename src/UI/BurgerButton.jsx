import React, { useState } from 'react'


const BurgerButton = () => {
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

    return (
        <div>
            <div onClick={handleClick}>
                <div className={topStyle.join(' ')}></div>
                <div className={meatStyle.join(' ')}></div>
                <div className={botStyle.join(' ')}></div>
            </div>
            <ul className={rootStyle.join(' ')}>
                <a className='navbar__item' href='#'>Home</a>
                <a className='navbar__item' href='#'>About</a>
                <a className='navbar__item' href='#'>Projects</a>
                <a className='navbar__item' href='#'>Contacts</a>
            </ul>
        </div>
    )
}

export default BurgerButton