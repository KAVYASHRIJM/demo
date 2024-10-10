import React from 'react'
import Navbar from './Navigation/Navbar'
import Home from './Components/Home'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Todolist from './Components/Todolist'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <div>
        <Navbar/>
        </div>
        <div style={{padding:'50px'}}>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todolist" element={<Todolist/>} />
        </Routes>
        </div>
      </Router>
       
    </div>
  )
}
export default App