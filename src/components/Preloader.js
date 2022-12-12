import React, {useEffect} from 'react'
import LogoWhite from '../images/logo-white.png'
import PreloaderImage from '../images/preloader-optimized.webp'
import './Preloader.css'

export default function Preloader() {

  useEffect(() => {
    window.scroll(0,0)
}, [])


  return (
    <div className='preloader-container'>
      <img src={PreloaderImage} alt=''/>
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>

  )
}
