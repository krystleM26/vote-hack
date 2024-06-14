import React from 'react'
import './navbar.css'
import dark_mode from '../../assets/day-and-night.png'
import search_icon from '../../assets/search.png'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src=" " alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>News</li>
        <li>Game</li>
        <li>Account</li>
      </ul>

      <div className='search-box'>
        <input type = 'text' placeholder='Search' />
        <img src='' alt='' />

      </div>
       <img src='' alt='' className='toggle-icon'/>



    </div>
  )
}

export default NavBar