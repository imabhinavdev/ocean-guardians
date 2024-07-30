import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Awareness from './pages/Awareness'
import Support from './pages/Support'
import Donate from './pages/Donate'
import Community from './pages/Community'
import Feedback from './pages/Feedback'
const App = () => {
  return (
    <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about/" element={<About/>}/>
        <Route path="awareness/" element={<Awareness/>}/>
        <Route path="community/" element={<Community/>}/>
        <Route path="support/" element={<Support/>}/>
        <Route path="donate/" element={<Donate/>}/>

        {/* this is feedback form*/}
        <Route path="feedback/" element = {<Feedback/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App