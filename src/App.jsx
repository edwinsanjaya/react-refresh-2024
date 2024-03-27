import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import NavBar from './components/NavBar'
import Experience from './pages/Experience'
import Overview from './pages/Overview'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Container>
          <Routes>
            <Route exact path="/" element={<Overview/>} />
            <Route exact path="/experience" element={<Experience/>} />
          </Routes>
        </Container>
      </BrowserRouter>
      
    </div>
  )  
}

export default App