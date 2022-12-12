import React from 'react'
import {Link} from 'react-router-dom';
import './Button.css'

export function Button({path, title, onClick}) {
  return (
    <Link to={path}>
        <button className='btn' onClick={onClick}>
            {title}
        </button>
    </Link>
  )
}
