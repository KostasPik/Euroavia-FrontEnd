import React, { useEffect, useState } from 'react'
import Universities from '../images/universities.svg'
import ActiveMembers from '../images/active-members.svg'
import Students from '../images/student.svg'
import CountUp from 'react-countup';

import './Metrics.css'

export default function Metrics() {




    


  return (
    <section class="metrics">
        <div class="metrics-card">
            <div class="metrics-card-header">
                <img src={Universities} />
                <strong id='counter' class="number universities"><CountUp end={40} />+</strong>
            </div>
            <p>Universities</p>
        </div>
        <div class="metrics-card">
            <div class="metrics-card-header">
                <img src={ActiveMembers}  />
                <strong class="number active-members"><CountUp end={2000} />+</strong>
            </div>
            <p>Active Members</p>
        </div>
        <div class="metrics-card">
            <div class="metrics-card-header">
                <img src={Students} />
                <strong class="number universities"><CountUp end={40} />+</strong>
            </div>
            <p>N.T.U.A. Members</p>
        </div>
    </section>
  )
}
