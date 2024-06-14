import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
      </div>
    
    </BrowserRouter>
  )
}

export default App