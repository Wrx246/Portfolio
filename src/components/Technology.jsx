import React from 'react'
import '../styles/Technology.scss'
import Html from '../assets/images/technology/icons8-html-5-96.png'
import Css from '../assets/images/technology/icons8-css3-96.png'
import JS from '../assets/images/technology/icons8-javascript-96.png'
import TS from '../assets/images/technology/icons8-typescript-96.png'
import REACT from '../assets/images/technology/icons8-react-100.png'
import Redux from '../assets/images/technology/icons8-redux-96.png'
import VSCode from '../assets/images/technology/icons8-visual-studio-96.png'
import Git from '../assets/images/technology/icons8-git-96.png'
import Figma from '../assets/images/technology/icons8-figma-96.png'
import GitHub from '../assets/images/technology/github.png'
import Mongo from '../assets/images/technology/icons8-mongodb.png'
import Postman from '../assets/images/technology/postman-icon.png'
import Webpack from '../assets/images/technology/icons8-webpack-64.png'
import Sass from '../assets/images/technology/icons8-sass-96.png'
import NodeJS from '../assets/images/technology/nodejs.png'

const Technology = () => {

    const techItems = [
        {name: "JS", img: JS},
        {name: "TS", img: TS},
        {name: "React", img: REACT},
        {name: "Redux", img: Redux},
        {name: "HTML", img: Html},
        {name: "CSS", img: Css},
        {name: "Sass", img: Sass},
        {name: "Webpack", img: Webpack},
        {name: "NodeJS", img: NodeJS},
        {name: "MongoDB", img: Mongo},
        {name: "Git", img: Git},
        {name: "GitHub", img: GitHub},
        {name: "VSCode", img: VSCode},
        {name: "Figma", img: Figma},
        {name: "Postman", img: Postman},
    ]


    return (
        <div className='technology'>
            <h2>MY STACK</h2>
            <div className='technology_box'>
            {techItems.map((item) => {
                return (
                    <div key={item.name} className='box_item'>
                        <span>{item.name}</span>
                        <img src={item.img} alt={item.name} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Technology