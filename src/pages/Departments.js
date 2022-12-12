import React, { useEffect, useState } from 'react'
import Preloader from '../components/Preloader';
import axiosInstance from '../api/api';
import './Departments.css'


export default function Department() {
  
  const [departments, setDepartments] = useState(null);
  const [loading, setLoading] = useState(true);
 
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
   <div className='departments-container'>

        <div className='department-category'>
          <h1>Marketing</h1>
        </div>
        {departments.map((department, index) => {
          return department.category === 'Marketing' && <div className={`department${index % 2 == 0 ? ' reversed' : ''}`}>
          <img src={`https://euroaviaathens.eu.pythonanywhere.com/${window.innerWidth > 1200 ? department.thumbnail : department.mobile_thumbnail}`} loading={index > 2 ? 'lazy' : null} />
            <div className='department-details' id={`${department.slug}`}>
              <h3 className='department-title'>{department?.title}</h3>
              <div className='body' dangerouslySetInnerHTML={{__html:department.english_body}}></div>
            </div>  
          </div>
        })}

        <div className='department-category'>
          <h1>Technical</h1>
        </div>
        {departments.map((department, index) => {
          return department.category === 'Technical' && <div className={`department${index % 2 == 0 ? ' reversed' : ''}`}>
          <img src={`https://euroaviaathens.eu.pythonanywhere.com/${department.mobile_thumbnail}`} loading={index > 2 ? 'lazy' : null} />
            <div className='department-details' id={`${department.slug}`}>
              <h3 className='department-title'>{department?.title}</h3>
              <div className='body' dangerouslySetInnerHTML={{__html:department.english_body}}></div>
            </div>  
          </div>
        })}
      </div>
  )
}
