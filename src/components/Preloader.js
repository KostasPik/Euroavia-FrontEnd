import React, {useEffect} from 'react'
import PreloaderImage from '../images/preloader-optimized.webp'
import './Preloader.css'

export default function Preloader() {

  useEffect(() => {
    window.scroll(0,0)
}, [])


  return (
    <div className='preloader-container'>
      <img src={PreloaderImage} alt=''/>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>

  )
}
