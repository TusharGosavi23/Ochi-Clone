import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Project from './components/Project'

function App() {
 
const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className='w-full min-h-screen bg-white-100 text-white'>
        <Navbar />
        <Landing />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Cards />
        <Project />
        <Footer />

    </div>
  )
}

export default App
