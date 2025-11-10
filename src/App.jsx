import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/NavBar'
import Hero from './component/Hero'
import Skills from './component/Skills'
import Projects from './component/Projects'

function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
