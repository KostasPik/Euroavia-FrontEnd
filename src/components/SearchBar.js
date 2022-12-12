import React from 'react'
import './SearchBar.css'
export default function SearchBar() {
  return (
    <div class="search">
        <input type="text" class="searchTerm" placeholder="Αναζήτηση..." />
        <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
        </button>
    </div>
  )
}
