import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Main from './components/Main'
import Preloader from './UI/Preloader'
import About from './components/About'

const App = () => {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])
    return (
        <>
            {
                loader ?
                    <Preloader />
                    :
                    <>
                        <Header />
                        <Main />
                        <About />
                    </>
            }

        </>
    )
}

export default App