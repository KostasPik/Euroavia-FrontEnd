import React, { useContext } from 'react'
import './Sponsors.css'

import HaiImage from '../images/sponsors/HAI-colored.svg'
import AltairImage from '../images/sponsors/altair.svg'
import WurthImage from '../images/sponsors/wurth.svg'
import PitsirikosImage from '../images/sponsors/pitsirikos.svg'
import PyrforosImage from '../images/sponsors/pyrforos.svg'
import EfoodImage from '../images/sponsors/efood.svg'
import BestRcShopsImage from '../images/sponsors/best-rc-shops.svg'
import HellenicDronesImage from '../images/sponsors/hellenic-drones.svg'
import BbAccountingImage from '../images/sponsors/bbaccounting.svg'
import AvekImage from '../images/sponsors/avek.svg'
import GlobalImage from '../images/sponsors/global.png'
import LangContext from '../context/LangContext'
import FibermaxImage from '../images/sponsors/fibermax.svg'
import ElvalImage from '../images/sponsors/elval.svg'
export default function Sponsors2() {

    const {lang} = useContext(LangContext);
  return (
    <section className='section sponsors'>
        <h3 className='title'>{lang === 'en'? "Sponsors" : "Χορηγοί"}</h3>
        <div className="text">
            <p>{lang==='en'?"We deeply thank all of our sponsors for continuously supporting our team!" : "Ευχαριστούμε βαθύτατα όλους τους χορηγούς μας που μας στηρίζουν αδιάκοπα!"}</p>
            <div className='sponsors-wrapper'>
                <div className='sponsor-card hai'>
                    <img src={HaiImage} loading='lazy' alt='Hellenic Aerospace Industry'/>
                </div>
                <div className='sponsor-card elval'>
                    <img src={ElvalImage} loading='lazy' alt='Elval Sponsor'/>
                </div>
                <div className='sponsor-card wurth'>
                    <img src={WurthImage} loading='lazy' alt='Wurth Sponsor'/>
                </div>
                <div className='sponsor-card avek'>
                    <img src={AvekImage} loading='lazy' alt='Avek Sponsor'/>
                </div>
                <div className='sponsor-card altair'>
                    <img src={AltairImage} loading='lazy' alt='Altair Sponsor' />
                </div>
                <div className='sponsor-card global'>
                        <img src={GlobalImage} loading='lazy' alt='Global Prep'/>
                </div>
                <div className='sponsor-card pitsirikos'>
                    <img src={PitsirikosImage} loading='lazy' alt='Pitsirikos Sponsor' />
                </div>

                <div className='sponsor-card pyrforos'>
                    <img src={PyrforosImage} loading='lazy' alt='Ntua Sponsor' />
                </div>

                <div className='sponsor-card efood'>
                    <img src={EfoodImage} loading='lazy' alt='Efood Sponsor'/>
                </div>

                <div className='sponsor-card bestrcshops'>
                    <img src={BestRcShopsImage} loading='lazy' alt='BestRcShops Sponsor'/>
                </div>

                <div className='sponsor-card hellenic-drones'>
                    <img src={HellenicDronesImage} loading='lazy' alt='Hellenic Drones Sponsor'/>
                </div>

                <div className='sponsor-card bb-accounting'>
                    <img src={BbAccountingImage} loading='lazy' alt='BB Accounting Sponsor'/>
                </div>
                <div className='sponsor-card fibermax'>
                    <img src={FibermaxImage} loading='lazy' alt='Fibermax Sponsor'/>
                </div>

            </div>
       
       </div>
    </section>
  )
}
