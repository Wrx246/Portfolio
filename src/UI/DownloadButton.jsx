import React, { useRef } from 'react'
import '../styles/UI/DownloadButton.scss'

const DownloadButton = ({children}) => {
    const ref = useRef();
    

    const onChangeImage = (e) => {
        // setImage(e.target.files[0]);
    }

    return (
        // <div className='download_wrapper' onClick={() => ref.current.click()}>
        <div className='download_wrapper'>
            {/* <input onChange={onChangeImage} ref={ref} type="file" accept="image/*" /> */}
            {children}
        </div>
    )
}

export default DownloadButton