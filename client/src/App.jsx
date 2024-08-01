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
import LoginForm from './pages/Login'
import SignupForm from './pages/Signup'
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


        {/* <Route path="donate/" element={<Donate/>}/> */}
        
        {/* this is feedback form*/}
        <Route path="feedback/" element = {<Feedback/>}/>
        <Route path="login/" element={<LoginForm/>}/>
        <Route path="signup/" element={<SignupForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App