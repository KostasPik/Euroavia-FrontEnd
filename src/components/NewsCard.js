import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import LangContext from '../context/LangContext'
import CalendarImage from '../images/calendar-optimized.webp'
import './NewsCard.css'

export default function NewsCard({title, slug, excerpt, imageURI, date}) {

  const {lang} = useContext(LangContext)

  return (
    <div className='news-card'>
        <div className='image' style={{backgroundImage:`url('https://euroaviaathens.eu.pythonanywhere.com${imageURI}')`}}></div>
        <div className='content'>
            <div className='header'>
              <h2 className='title'>{title}</h2>
              <hr align='left' />
            </div>
            <div className='body'>
              <p className='text' dangerouslySetInnerHTML={{__html: excerpt}}></p>
              <small className='date'><img src={CalendarImage} alt='calendar' />{new Date(date).toLocaleDateString(lang === 'el'?'el-GR':'en', { year: 'numeric', month: 'numeric', day: 'numeric' })}</small>
            </div>
          <div className='view-more'>
            <Link to={`/new/${slug}/`}>Περισσότερα</Link>
          </div>
        </div>
    </div>
  )
}
