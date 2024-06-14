import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src=" " alt='' className='logo' />
      <ul>
        <li>Hone</li>
        <li>About</li>
        <li>News</li>
        <li>Game</li>
      </ul>

      <div className='search-box'>
        <input type = 'text' placeholder='Search' />
        <img src='' alt='' />

      </div>
       <img src='' alt='' />


    </div>
  )
}

export default NavBar