import Rocket from '../images/rocket.svg'
import FancyBorder from './FancyBorder';
import Pyrforos from '../images/pyrforos.png'
import GreekFlag from '../images/greek-flag.svg'
import './Hero.css'
import { useEffect, useState } from 'react';

const Hero = () => {  
    
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

useEffect( () => {
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  window.addEventListener('resize', handleResize)

}, [])

  return (
    <div className="hero">
        <div className="bg"></div>
        <div className={`star-field ${window.innerWidth >900 ? ' animated' : ''}` }>
        <div className="layer"></div>
        <div className="layer"></div>
        <div clclassNameass="layer"></div>    
        </div>


        <div className="context">
            <div className="text">
                <small className="welcome">Welcome to</small>
                <h1 className='title'>EUROAVIA <span className='bg-letters'>Athens</span></h1>
                <p className='quote'>"They build things... We build wings."</p>
    
                <a href="https://forms.gle/t1SnCWLEA2WnaPyt6" target="_blank" rel="noopener" className="join-us">Join Us<img src={Rocket} alt='rocket' /></a>

                <div className='pyrforos-wrapper'>
                  <img src={Pyrforos} className='pyrforos' alt='N.T.U.A. Logo' />

                  <h3>National Technical University of Athens</h3>

                  <img src={GreekFlag} className='greek-flag' alt='Greek Flag' />
                </div>
            </div> 


          {(height < 700 && width < 980) ? null : <FancyBorder />}

        </div>        

    </div>
  )
}

export default Hero