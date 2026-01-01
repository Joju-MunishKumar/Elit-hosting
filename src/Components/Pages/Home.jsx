import React from 'react'
import HeroSection from '../mainComp/HeroSection'
import Hero from '../mainComp/HeroSection'
import Feature from '../mainComp/Feature'
import Pricing from '../mainComp/Pricing'
import ServiceData from '../mainComp/ServiceData'
import Accessiv from '../mainComp/Accessiv'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Hero/>
    <Feature/>
    <Pricing/>
    <ServiceData/>
    <Accessiv/>
 
    </div>
  )
}

export default Home
