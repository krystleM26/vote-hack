import React from 'react'
import './navbar.css'
import ballot from '../../assets/ballot.png'
import dark_mode from '../../assets/day-and-night.png'
import search_icon from '../../assets/search.png'



const NavBar = ({ theme, setTheme }) => {

    const toggle_mode = () => {
      console.log('Toggle mode called');
      setTheme(prevTheme => prevTheme === 'light' ? 'dark': 'light')
      console.log('Theme after toggle:', theme);
    }


  return (
    <div className='navbar'>
      <img src={ballot} alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>News</li>
        <li>Game</li>
        <li>Account</li>
      </ul>

      <div className='search-box'>
       
          <input type = 'text' placeholder='Search' />
          <img src={search_icon} alt=''  />
       
      </div>

       <img onClick={() => {toggle_mode()}} src={dark_mode} alt='' className='toggle-icon'/>



    </div>
  )
}

export default NavBar