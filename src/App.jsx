import React from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Image from './assets/image.jpg'

const App = () => {
    return (
        <div>
            <Header />
            <p>hello</p>
            <img src={Image} />
        </div>
    )
}

export default App