import React, {useEffect, useState, useContext} from 'react'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/api';
import Preloader from '../components/Preloader';
import LangContext from '../context/LangContext';
import './Event.css'

export default function Event() {
    const {lang} = useContext(LangContext);
    const {postSlug} = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);


    async function fetchEvent() {
        const response = await axiosInstance.get(`/event/${postSlug}/`)
        setEvent(response?.data?.data)
        setLoading(false);
    }


    useEffect( () => {
        setLoading(true);
        fetchEvent();
    }, [postSlug])


    function unEscapeHTML(htmlStr) {
        htmlStr = htmlStr.replace(/&lt;/g , "<");	 
        htmlStr = htmlStr.replace(/&gt;/g , ">");     
        htmlStr = htmlStr.replace(/&quot;/g , "\"");  
        htmlStr = htmlStr.replace(/&#39;/g , "\'");   
        htmlStr = htmlStr.replace(/&amp;/g , "&");
        return htmlStr;
    }


    if(loading) return <Preloader />
    return (

<>

        <Helmet>

            <meta property="description" content='Hello World' data-rh="true"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${lang ==='el'? event?.greek_title : event?.english_title} - EUROAVIA Athens`} data-rh="true"/>
            <meta property="og:description" data-rh="true" content="Hello World" />
            <meta property="og:image" content={`https://euroaviaathens.eu.pythonanywhere.com${event?.thumbnail}`} data-rh="true"/>
            <meta property="og:site_name" content="EUROAVIA Athens" data-rh="true"/>
            <meta property="og:image:alt" content="Euroavia Photo"data-rh="true"/>
            <meta name="twitter:card" content="summary_large_image"data-rh="true" />
            <meta name="twitter:site" content="EUROAVIA Athens" data-rh="true"/>
            <meta name="twitter:title" content={`${lang ==='el'? event?.greek_title : event?.english_title} - EUROAVIA Athens`} data-rh="true"/>
            <meta name="twitter:description" data-rh="true"  content="Hello World" />
            <meta name="twitter:image" content={`https://euroaviaathens.eu.pythonanywhere.com${event?.thumbnail}`} data-rh="true"/>
            <title>{lang ==='el'? event?.greek_title : event?.english_title} - EUROAVIA Athens</title>
        </Helmet>


    <div className='event-container'>
        <div className='event-details'>
            <div className='event-image' style={{backgroundImage:`url(https://euroaviaathens.eu.pythonanywhere.com${event?.thumbnail})`}}>
                <h1 className='event-title'>{lang ==='el'? event?.greek_title : event?.english_title}</h1>
            </div>

            {/* {event?.thumbnail ? window.innerWidth > 960 ? <img src={"https://euroaviaathens.eu.pythonanywhere.com" + event?.thumbnail} /> : <img src={"https://euroaviaathens.eu.pythonanywhere.com" + event?.mobile_thumbnail} /> : null} */}
            {/* <div className='event-body' dangerouslySetInnerHTML={{__html: unEscapeHTML(event?.content?.rendered)}}></div> */}
            <div className='event-body' dangerouslySetInnerHTML={{__html: unEscapeHTML(lang==='el' ? event?.greek_body : event?.english_body)}}></div>

        </div>
    </div>
    </>
  )
}