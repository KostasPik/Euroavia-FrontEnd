
import { useContext, useEffect } from "react"
import Hero from "../components/Hero"
import Metrics from "../components/Metrics"
import CardSection from '../components/CardSection'
import Teams from "../components/Teams"
import LangContext from '../context/LangContext'
import { whoWeAre, goals } from "../content/Landing"
import './Landing.css'
import axiosInstance from "../api/api"
import Sponsors from '../components/Sponsors';
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"


const Landing = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const {lang} = useContext(LangContext);
  useEffect (() => {
    axiosInstance.get('/departments/');
  }, [])
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

    <Hero />
    <Metrics />

    <section className="section who-we-are">

        <h3 className='title'>{whoWeAre[lang].header}</h3>
        <div className="text" dangerouslySetInnerHTML={{__html: whoWeAre[lang].body }}>
        </div>
    </section>


    <div class="skew-c"></div>

    <CardSection />
    <div class="skew-cc"></div>


    <Teams />
    

    <section class="section targets">
        <h3 class="title">{goals[lang].header}</h3>
        <div class="text" dangerouslySetInnerHTML={{__html: goals[lang].body}}>
        </div>
    </section>

    <Sponsors />

    </>
  )
}

export default Landing