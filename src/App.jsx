import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Main from './components/Main'
import Preloader from './UI/Preloader'

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

                    </>
            }

        </>
    )
}

export default App