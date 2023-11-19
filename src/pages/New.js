import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../api/api'
import './New.css'
import Preloader from '../components/Preloader'
import CalendarImage from '../images/calendar-optimized.webp'
import LangContext from '../context/LangContext'
import { Helmet } from 'react-helmet-async'
export default function New() {

 
  const {postSlug} = useParams();
    const {lang} = useContext(LangContext);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchPost() {
        const response = await axiosInstance.get(`/announcement/${postSlug}/`)
        setPost(response?.data?.data);
        setLoading(false);
    }

    function createMarkup(storyblokHTML) {
        return {
          __html: storyblokHTML,
        }
      }
      useEffect( () => {
        fetchPost();
    }, [])

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    function decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html.replace( /(<([^>]+)>)/ig, '').replace(/\r?\n|\r/g, '');
      return txt.value.slice(0,500);
  }
    if (loading) return <Preloader />

  return (
    <>
        <Helmet>
            <meta property="description" content={`${lang === 'el' ? decodeHtml(post?.greek_body)+'...' : decodeHtml(post?.english_body)+'...'}`} data-rh="true"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${lang === 'el' ? post?.greek_title : post?.english_title} - EUROAVIA Athens`} data-rh="true"/>
            <meta property="og:description" data-rh="true" content={`${lang === 'el' ? decodeHtml(post?.greek_body)+'...' : decodeHtml(post?.english_body)+'...'}`} />
            <meta property="og:image" content={`https://euroaviaathens.eu.pythonanywhere.com${post?.thumbnail}`} data-rh="true"/>
            <meta property="og:site_name" content="EUROAVIA Athens" data-rh="true"/>
            <meta property="og:image:alt" content="Euroavia Photo"data-rh="true" />
            <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
            <meta name="twitter:site" content="EUROAVIA Athens" data-rh="true"/>
            <meta name="twitter:description" data-rh="true"  content={`${lang === 'el' ? decodeHtml(post?.greek_body)+'...' : decodeHtml(post?.english_body)+'...'}`} />
            <meta name="twitter:title" content={`${lang === 'el' ? post?.greek_title : post?.english_title} - EUROAVIA Athens`} data-rh="true"/>
            <meta name="twitter:image" content={`https://euroaviaathens.eu.pythonanywhere.com${post?.thumbnail}`} data-rh="true"/>
            <title>{lang === 'el' ? post?.greek_title : post?.english_title} - EUROAVIA Athens</title>
      </Helmet>
    <div className='new'>
        <div className='new-container'>
            {/* <div style={{backgroundImage:`url(https://euroaviaathens.eu.pythonanywhere.com${post?.thumbnail})`}} className='new-image' alt={post?.greek_title} ></div> */}
            <img src={`https://euroaviaathens.eu.pythonanywhere.com${post?.thumbnail}`} className='new-image' alt={post?.greek_title} />
            <div className='new-content'>
                <h1 className='title'>{lang === 'el' ? post?.greek_title : post?.english_title}</h1>
                <small className='date'><img src={CalendarImage} alt='calendar' />{new Date(post?.created_at).toLocaleDateString(lang === 'el'?'el-GR':'en', { year: 'numeric', month: 'numeric', day: 'numeric' })}</small>
                <div className='body' dangerouslySetInnerHTML={createMarkup(lang === 'el' ? post?.greek_body : post?.english_body)}></div>
            </div>
        </div>
    </div>
    </>
  )
}
