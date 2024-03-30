import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import NavBar from './components/NavBar'
import Experience from './pages/Experience'
import Overview from './pages/Overview'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className='content-container'>
          <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route exact path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App