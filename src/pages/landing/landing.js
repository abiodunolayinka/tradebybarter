import React from 'react'
import Hero from '../../components/herosection/hero'
import About from '../../components/aboutUs/about'
import Product from '../../components/product/product'
import Car from '../../components/car/car'
import Feedback from '../../components/feedback/feedback'

const Landing = () => {
  return (
   <>
   <Hero />
   <About/>
   <Product />
   <Car/>
   <Feedback />
    </>
  )
}

export default Landing;  
