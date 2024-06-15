import React, { useState } from 'react'
import Navbar from './components/Navbar/NavBar'
import './App.css'
import Quiz from './components/quiz/Quiz'

const App = () => {

  const [theme, setTheme] = useState('light')



  return (
  
      <div className={`container ${theme}`}>
        <Navbar  theme={theme} setTheme={setTheme} />
        <Quiz />
      </div>
    

  )
}

export default App