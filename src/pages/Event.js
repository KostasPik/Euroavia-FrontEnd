import React, {useEffect, useState, useContext} from 'react'
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
    <div className='event-container'>
        <div className='cool-title'>
            <h1>{lang ==='el'? event?.greek_title : event?.english_title}</h1>
        </div>
        <div className='event-details'>
            {event?.thumbnail ? window.innerWidth > 960 ? <img src={"https://euroaviaathens.eu.pythonanywhere.com" + event?.thumbnail} /> : <img src={"https://euroaviaathens.eu.pythonanywhere.com" + event?.mobile_thumbnail} /> : null}
            {/* <div className='event-body' dangerouslySetInnerHTML={{__html: unEscapeHTML(event?.content?.rendered)}}></div> */}
            <div className='event-body' dangerouslySetInnerHTML={{__html: unEscapeHTML(lang==='el' ? event?.greek_body : event?.english_body)}}></div>

        </div>
    </div>
  )
}