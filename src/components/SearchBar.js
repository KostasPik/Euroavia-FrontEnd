import React from 'react'
import './SearchBar.css'
export default function SearchBar() {
  return (
    <div className="search">
        <input type="text" className="searchTerm" placeholder="Αναζήτηση..." />
        <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
        </button>
    </div>
  )
}
