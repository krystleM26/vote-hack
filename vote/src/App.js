import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import About from './components/About/About'
import Account from './components/Account/Account'
import News from './components/News/News'


const App = () => {

  const [theme, setTheme] = useState('light')



  return (
    <Router>
      
      <div className={`container ${theme}`}>
        <Navbar  theme={theme} setTheme={setTheme} />
        <Routes>

        <Route path="/quiz" element={<Quiz /> } />
        <Route path="/news" element={<News />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
       
        </Routes>
      </div>
    </Router>
  
    

  )
}
const Home = () => (
  <div>
    <h1>Welcome to Voters Hub</h1>
    <p> Learn about us </p>
    <p> Test Your presidential knowledge </p>
    <p> Get the latest poll data and election news </p>

 
  </div>
);

export default App