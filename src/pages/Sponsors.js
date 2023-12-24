import React, {useEffect} from 'react'
import './Sponsors.css'
import { useContext } from 'react';
import LangContext from '../context/LangContext';
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
import FiberMaxImage from '../images/sponsors/fibermax.svg'
import ElvalImage from '../images/sponsors/elval.svg'
import MantopoulosImage from '../images/sponsors/mantopoulos.svg'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



function Sponsors() {

    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const {lang} = useContext(LangContext);

  return (
    <>
          <Helmet>
      



      <meta property="description" content={lang==='el'?'Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!':
      'What is EUROAVIA? EUROAVIA is the European Association of Aerospace Students, founded in 1959 and present in 45 cities in 20 European countries, with a total of about 2000 members. It aims to stimulate contacts between students and the aerospace industry, offer opportunities of acquaintance and exchange among students from different countries and represent European Read more about Welcome to EUROAVIA Athens!'} data-rh="true"/>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={lang === 'el'? 'Καλωσήρθατε στη EUROAVIA Athens! - EUROAVIA Athens' : 'Welcome to EUROAVIA Athens! - EUROAVIA Athens'} data-rh="true"/>
      <meta property="og:description" data-rh="true" content={lang==='el'?'Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!':
      'What is EUROAVIA? EUROAVIA is the European Association of Aerospace Students, founded in 1959 and present in 45 cities in 20 European countries, with a total of about 2000 members. It aims to stimulate contacts between students and the aerospace industry, offer opportunities of acquaintance and exchange among students from different countries and represent European Read more about Welcome to EUROAVIA Athens!'} />
      <meta property="og:image" content="https://euroavia.netlify.app/euroavia_ath_logo.png" data-rh="true"/>
      <meta property="og:site_name" content="EUROAVIA Athens" data-rh="true"/>
      <meta property="og:image:alt" content="Euroavia Photo"data-rh="true"/>
      <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
      <meta name="twitter:site" content="EUROAVIA Athens" data-rh="true"/>
      <meta name="twitter:title" content={lang === 'el'? 'Καλωσήρθατε στη EUROAVIA Athens! - EUROAVIA Athens' : 'Welcome to EUROAVIA Athens! - EUROAVIA Athens'} data-rh="true"/>
      <meta name="twitter:description" data-rh="true"  content={lang==='el'?'Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!':
      'What is EUROAVIA? EUROAVIA is the European Association of Aerospace Students, founded in 1959 and present in 45 cities in 20 European countries, with a total of about 2000 members. It aims to stimulate contacts between students and the aerospace industry, offer opportunities of acquaintance and exchange among students from different countries and represent European Read more about Welcome to EUROAVIA Athens!'} />
      <meta name="twitter:image" content="https://euroavia.netlify.app/euroavia_ath_logo.png" data-rh="true"/>
      <title>{lang === 'el'? 'Καλωσήρθατε στη EUROAVIA Athens! - EUROAVIA Athens' : 'Welcome to EUROAVIA Athens! - EUROAVIA Athens'}</title>


</Helmet>
    <div className='sponsors-container'>
        <div className='cool-title'>
            <h1>{lang ==='en' ? 'Sponsors' : 'Χορηγοί'}</h1>
        </div>
        
        <div className='sponsors-category'>
            <h2 className='sponsors-category-title title-with-hr'>Platinum</h2>
            
            <div className='sponsors-category-wrapper'>
                <div className='sponsor-card hai'>
                        <img src={HaiImage} loading='lazy' alt='Hellenic Aerospace Industry'/>
                </div>
                <div className='sponsor-card altair'>
                        <img src={AltairImage} loading='lazy' alt='Altair'/>
                </div>
                <div className='sponsor-card avek'>
                        <img src={AvekImage} loading='lazy' alt='Avek'/>
                </div>
                <div className='sponsor-card elval'>
                        <img src={ElvalImage} loading='lazy' alt='Elval'/>
                </div>
            </div>
        </div>


        <div className='sponsors-category'>
            <h2 className='sponsors-category-title title-with-hr'>Silver</h2>
            
            <div className='sponsors-category-wrapper'>
                <div className='sponsor-card global'>
                        <img src={GlobalImage} loading='lazy' alt='Global Prep'/>
                </div>
                <div className='sponsor-card pyrforos'>
                        <img src={PyrforosImage} loading='lazy' alt='National Technical University of Athens'/>
                </div>
            </div>
        </div>


        <div className='sponsors-category'>
            <h2 className='sponsors-category-title title-with-hr'>Bronze</h2>
            
            <div className='sponsors-category-wrapper'>
                <div className='sponsor-card wurth'>
                        <img src={WurthImage} loading='lazy' alt='Wurth'/>
                </div>

                <div className='sponsor-card efood'>
                        <img src={EfoodImage} loading='lazy' alt='Efood'/>
                </div>

                <div className='sponsor-card pitsirikos'>
                        <img src={PitsirikosImage} loading='lazy' alt='Pitsirikos'/>
                </div>

                <div className='sponsor-card bestrcshops'>
                    <img src={BestRcShopsImage} loading='lazy' alt='BestRcShops'/>
                </div>

                <div className='sponsor-card mantopoulos'>
                    <img src={MantopoulosImage} loading='lazy' alt='Mantopoulos'/>
                </div>

            </div>
        </div>


        <div className='sponsors-category'>
            <h2 className='sponsors-category-title title-with-hr'>{lang === 'en' ? 'Supporters' : 'Υποστηρικτές'}</h2>
            
            <div className='sponsors-category-wrapper'>
            

                <div className='sponsor-card hellenic-drones'>
                    <img src={HellenicDronesImage} loading='lazy' alt='Hellenic Drones'/>
                </div>

                <div className='sponsor-card bb-accounting'>
                    <img src={BbAccountingImage} loading='lazy' alt='BB Accounting'/>
                </div>

                <div className='sponsor-card fibermax'>
                    <img src={FiberMaxImage} loading='lazy' alt='Fibermax'/>
                </div>

            </div>

            
        </div>
        
        </div>
        </>

  )
}

export default Sponsors