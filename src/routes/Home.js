import React from 'react'
import Hero from '../components/Hero'
import Img from '../components/Img'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Team from '../components/Team'

const Home = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Team />
        <Img />
        <Content />
        <Footer />
      </> 
    )
  }
  
  export default Home