import React, { useContext, useEffect, useState } from 'react'
import Preloader from '../components/Preloader';
import axiosInstance from '../api/api';
import './Departments.css'
import LangContext from '../context/LangContext';
import { Helmet } from 'react-helmet-async';


export default function Department() {
  
  const [departments, setDepartments] = useState(null);
  const [loading, setLoading] = useState(true);
  const {lang} = useContext(LangContext);
  async function fetchDepartments() {
    const response = await axiosInstance.get('/departments/');
    setDepartments(response?.data?.data);
    setLoading(false);
  }

  useEffect( () => {
    fetchDepartments();
  }, [])
  

  if (loading) return <Preloader />
  
  return (
    <>
    <Helmet>

    <meta name="description" data-rh="true" content="Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!"/>
    <meta property="og:type" content="website" />
    <meta property="og:title" content={lang==='el'?'Ομάδες':'Teams' - "EUROAVIA Athens"} data-rh="true"/>
    <meta property="og:description" data-rh="true" content="Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!" />
    <meta property="og:image" content="http://euroavia.gr/wp-content/uploads/2018/04/euroavia_ath_logo.png" data-rh="true"/>
    <meta property="og:site_name" content="EUROAVIA Athens" data-rh="true"/>
    <meta property="og:image:alt" content="Euroavia Photo"data-rh="true"/>
    <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
    <meta name="twitter:site" content="EUROAVIA Athens" data-rh="true"/>
    <meta name="twitter:title" content={lang==='el'?'Ομάδες':'Teams' - "EUROAVIA Athens"} data-rh="true"/>
    <meta name="twitter:description" data-rh="true"  content="Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!" />
    <meta name="twitter:image" content="http://euroavia.gr/wp-content/uploads/2018/04/euroavia_ath_logo.png"data-rh="true"/>
    <title>{lang==='el'?'Ομάδες':'Teams'} - EUROAVIA Athens</title>
    
    </Helmet>

   <div className='departments-container'>

        <div className='department-category'>
          <h1>Marketing</h1>
        </div>
        {departments.map((department, index) => {
          return department.category === 'Marketing' && <div className={`department${index % 2 === 0 ? ' reversed' : ''}`}>
          <img src={`https://euroaviaathens.eu.pythonanywhere.com${window.innerWidth > 1200 ? department.thumbnail : department.mobile_thumbnail}`} loading={index > 2 ? 'lazy' : null} />
            <div className='department-details' id={`${department.slug}`}>
              <h3 className='department-title'>{department?.title}</h3>
              <div className='body' dangerouslySetInnerHTML={lang ==='en' ? {__html:department.english_body} : {__html:department.greek_body}}></div>
            </div>  
          </div>
        })}

        <div className='department-category'>
          <h1>Technical</h1>
        </div>
        {departments.map((department, index) => {
          return department.category === 'Technical' && <div className={`department${index % 2 === 0 ? ' reversed' : ''}`}>
          <img src={`https://euroaviaathens.eu.pythonanywhere.com${department.mobile_thumbnail}`} loading={index > 2 ? 'lazy' : null} />
            <div className='department-details' id={`${department.slug}`}>
              <h3 className='department-title'>{department?.title}</h3>
              <div className='body' dangerouslySetInnerHTML={lang ==='en' ? {__html:department.english_body} : {__html:department.greek_body}}></div>
            </div>  
          </div>
        })}
      </div>
      </>
  )
}
