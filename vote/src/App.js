import React, { useState } from 'react'
import Navbar from './components/Navbar/NavBar'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import About from './components/About/About'
import Account from './components/Account/Account'
import News from './components/News/News'


const App = () => {

  const [theme, setTheme] = useState('light')



  return (
  
      <div className={`container ${theme}`}>
        <Navbar  theme={theme} setTheme={setTheme} />
        <Quiz />
        <News />
        <Account />
        <About />
      </div>
    

  )
}

export default App