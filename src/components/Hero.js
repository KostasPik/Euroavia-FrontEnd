import Rocket from '../images/rocket.svg'
import FancyBorder from './FancyBorder';
import Pyrforos from '../images/pyrforos.svg'
import './Hero.css'

const Hero = () => {  
    

  return (
    <div class="hero">
        <div class="bg"></div>
        <div class={`star-field ${window.innerWidth >900 ? ' animated' : ''}` }>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>    
        </div>


        <div class="context">
            <div class="text">
                <small class="welcome">Welcome to</small>
                <h1 class='title'>EUROAVIA Athens</h1>
                <p class='quote'>"They build things... We build wings."</p>
    
                <a href="#" className="join-us">Join Us<img src={Rocket} /></a>
                <div className='pyrforos-wrapper'>
                  <img src={Pyrforos} className='pyrforos' />
                  <h3>National Technical University of Athens</h3>
                </div>
            </div> 


          {(window.innerHeight < 700 && window.innerWidth < 980) ? null : <FancyBorder />}

        </div>        

    </div>
  )
}

export default Hero