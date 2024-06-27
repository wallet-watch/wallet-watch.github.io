import React from 'react'
import Footer from '../components/Footer'
import About from '../components/About'
import Team from '../components/Team'
import Navbar from '../components/Navbar'
import Description from '../components/Description'

const Home = () => {
    return (
      <>
        <Navbar />
        <About />
        <Team />
        <Description />
        <Footer />
      </> 
    )
  }
  
  export default Home