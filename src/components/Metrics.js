import React, { useEffect, useState } from 'react'
import Universities from '../images/universities.svg'
import ActiveMembers from '../images/active-members.svg'
import Students from '../images/student.svg'
import CountUp from 'react-countup';

import './Metrics.css'

export default function Metrics() {




    


  return (
    <section className="metrics">
        <div className="metrics-card">
            <div className="metrics-card-header">
                <img src={Universities} alt='Universities' />
                <strong id='counter' className="number universities"><CountUp end={40} />+</strong>
            </div>
            <p>Universities</p>
        </div>
        <div className="metrics-card">
            <div className="metrics-card-header">
                <img src={ActiveMembers}  alt='Active Members'/>
                <strong className="number active-members"><CountUp end={2000} />+</strong>
            </div>
            <p>Active Members</p>
        </div>
        <div className="metrics-card">
            <div className="metrics-card-header">
                <img src={Students} alt='NTUA Students'/>
                <strong className="number universities"><CountUp end={40} />+</strong>
            </div>
            <p>N.T.U.A. Members</p>
        </div>
    </section>
  )
}
