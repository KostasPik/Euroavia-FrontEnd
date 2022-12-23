import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../api/api'
import './New.css'
import Preloader from '../components/Preloader'
import CalendarImage from '../images/calendar-optimized.webp'
import LangContext from '../context/LangContext'

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


    if (loading) return <Preloader />

  return (
    <div className='new'>
        <div className='new-container'>
            <img src={`https://euroaviaathens.eu.pythonanywhere.com${post?.thumbnail}`} className='new-image' alt={post?.greek_title} />
            <div className='new-content'>
                <h1 className='title'>{lang === 'el' ? post?.greek_title : post?.english_title}</h1>
                <small className='date'><img src={CalendarImage} alt='calendar' />{new Date(post?.created_at).toLocaleDateString(lang === 'el'?'el-GR':'en', { year: 'numeric', month: 'numeric', day: 'numeric' })}</small>
                <div className='body' dangerouslySetInnerHTML={createMarkup(lang === 'el' ? post?.greek_body : post?.english_body)}></div>
            </div>
        </div>
    </div>
  )
}
