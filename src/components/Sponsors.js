import React, { useContext } from 'react'
import './Sponsors.css'

import HaiImage from '../images/sponsors/HAI-colored.svg'
import BetaImage from '../images/sponsors/beta-optimized.svg'
import WurthImage from '../images/sponsors/wurth.svg'
import PitsirikosImage from '../images/sponsors/pitsirikos.svg'
import PyrforosImage from '../images/sponsors/pyrforos.svg'
import EfoodImage from '../images/sponsors/efood.svg'
import BestRcShopsImage from '../images/sponsors/best-rc-shops.svg'
import HellenicDronesImage from '../images/sponsors/hellenic-drones.svg'
import BbAccountingImage from '../images/sponsors/bbaccounting.svg'

import LangContext from '../context/LangContext'


export default function Sponsors2() {

    const {lang} = useContext(LangContext);
  return (
    <section class='section sponsors'>
        <h3 class='title'>{lang === 'en'? "Sponsors" : "Χορηγοί"}</h3>
        <div class="text">
            <p>{lang==='en'?"We deeply thank all of our sponsors for continuously supporting our team!" : "Ευχαριστούμε βαθύτατα όλους τους χορηγούς μας που μας στηρίζουν αδιάκοπα!"}</p>
            <div className='sponsors-wrapper'>
                <div className='sponsor-card hai'>
                    <img src={HaiImage} loading='lazy'/>
                </div>
                <div className='sponsor-card wurth'>
                    <img src={WurthImage} loading='lazy'/>


                </div>
                <div className='sponsor-card beta'>
                    <img src={BetaImage} loading='lazy' />

                </div>

                <div className='sponsor-card pitsirikos'>
                    <img src={PitsirikosImage} loading='lazy'/>
                </div>

                <div className='sponsor-card pyrforos'>
                    <img src={PyrforosImage} loading='lazy'/>
                </div>

                <div className='sponsor-card efood'>
                    <img src={EfoodImage} loading='lazy'/>
                </div>

                <div className='sponsor-card bestrcshops'>
                    <img src={BestRcShopsImage} loading='lazy'/>
                </div>

                <div className='sponsor-card hellenic-drones'>
                    <img src={HellenicDronesImage} loading='lazy'/>
                </div>

                <div className='sponsor-card bb-accounting'>
                    <img src={BbAccountingImage} loading='lazy'/>
                </div>


            </div>
       
       </div>
    </section>
  )
}
