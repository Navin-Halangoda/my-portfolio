import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/NavBar'
import Hero from './component/Hero'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Experience from './component/Experience'
import Contact from './component/Contacts'

function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
