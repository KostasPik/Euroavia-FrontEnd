import React from 'react'
import Pyrforos from '../images/pyrforos.svg'
import Facebook from '../images/social/facebook.svg'
import Instagram from '../images/social/instagram.svg'
import Twitter from '../images/social/twitter.png'
import Youtube from '../images/social/youtube.svg'
import Linkedin from '../images/social/linkedin.svg'
import Email from '../images/social/email.svg'
import './Footer.css'


export default function Footer() {
  return (
    <div className='footer'>

        <div className='col col1'>
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>Air Cargo Challenge</li>
                <li>Symposium</li>
                <li>Company Visits</li>
            </ul>
        </div>
        <div className='col col4'>
        <h3>Technical</h3>
            <ul>
                <li>Structural</li>
                <li>Electrical Design</li>
                <li>Manufacturing</li>
                <li>Aerodynamics</li>
            </ul>
        </div>
        <div className='col col2 marketing'>
            <h3>Marketing</h3>
                <ul>
                    <li>It & Website</li>
                    <li>Event Organising</li>
                    <li>Social media</li>
                    <li>Creative Design</li>
                    <li>Fund Raising</li>
                    <li>Video / Photography</li>
                </ul>            
        </div>

        <div className='col col3'>
            <div className='ntua'>
                <img src={Pyrforos} alt='Εθνικό Μετσόβιο Πολυτεχνείο' loading='lazy' />
                <div className='ntua-caption'>
                    <h4>National Technical University of Athens</h4>
                    <p class='subtitle'>Πολυτεχνειούπολη Ζωγράφου Ηρώων Πολυτεχνείου 9 15772 Ζωγράφου</p>
                </div>
            </div>

            <div className='social'>
                <a href='https://www.instagram.com/euroavia_athens'><img src={Instagram} alt='Euroavia Athens Instagram Page' loading='lazy'/></a>
                <a href='https://www.facebook.com/EuroaviaAthens'><img src={Facebook} alt='Euroavia Athens Facebook Page' loading='lazy'/></a>
                <a href='https://twitter.com/euroavia_athens'><img src={Twitter} alt='Euroavia Athens Twitter Page' loading='lazy'/></a>
                <a href='https://www.youtube.com/c/euroaviaathens'><img src={Youtube} alt='Euroavia Athens YouTube Page' loading='lazy'/></a>
                <a href='https://www.linkedin.com/company/euroavia-athens/'><img src={Linkedin} alt='Euroavia Athens LinkedIn Page' loading='lazy'/></a>
                <a href='mailto:euroavia.ntua@gmail.com'><img src={Email} alt='Euroavia Athens E-Mail' loading='lazy'/></a>

            </div>
        </div>

    </div>
  )
}
