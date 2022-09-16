import React from 'react'
import '../styles/Footer.scss'
import DownloadButton from '../UI/DownloadButton'
import Download from '../assets/images/Vector.png'

const Footer = () => {
    return (
        <div className='footer' id='contacts'>
            <div className='footer_body'>
                <div className='footer_download'>
                    <h4>Download CV</h4>
                    <DownloadButton>
                        <button>
                            <img src={Download} alt='download' />
                            Download
                        </button>
                    </DownloadButton>
                </div>
                <div className='footer_contacts'>
                    <h4>Contacts</h4>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/mkuzmianok/" target="_blank">
                            LinkedIn</a></li>
                        <li><a href="https://t.me/jstwrx" target="_blank">Telegram</a></li>
                        <li><a href="jst.wrx@gmail.com" target="_blank">E-mail</a></li>
                    </ul>
                </div>
                <div className='footer_links'>
                    <h4>Links</h4>
                    <ul>
                        <li><a href="https://github.com/Wrx246" target="_blank">GitHub</a></li>
                        <li><a href="https://www.codewars.com/users/Waryxa" target="_blank">
                            CodeWars</a></li>
                    </ul>
                </div>
                <div className='footer_location'>
                    <h4>Location</h4>
                    <p>Belarus, Minsk</p>
                </div>
            </div>
            <span className='footer_id'>© 2022 - Maksim Kuzmianok</span>
        </div>
    )
}

export default Footer