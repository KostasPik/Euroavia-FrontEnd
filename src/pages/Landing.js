
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
import Sponsors2 from '../components/Sponsors2';

const Landing = () => {

  const {lang} = useContext(LangContext);
  useEffect (() => {
    axiosInstance.get('/departments/');
  }, [])
  return (
    <>
    <Hero />
    <Metrics />

    <section class="section who-we-are">

        <h3 class='title'>{whoWeAre[lang].header}</h3>
        <div class="text" dangerouslySetInnerHTML={{__html: whoWeAre[lang].body }}>
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

    <Sponsors2 />

    </>
  )
}

export default Landing