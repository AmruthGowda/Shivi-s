import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import FoodsSection from './FoodsSection'
import Catreen from './Catreen'
import Footer from './Footer'

const Main = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar/>
      <Hero/>
      <FoodsSection/>
      <Catreen/>
      <Footer/>
    </main>
  )
}

export default Main
