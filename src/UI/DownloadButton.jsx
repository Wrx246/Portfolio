import React from 'react'
import '../styles/UI/DownloadButton.scss'

const DownloadButton = ({children}) => {
    
    return (
        <div className='download_wrapper'>
            {children}
        </div>
    )
}

export default DownloadButton