import SuperNav from '../components/organisms/SuperNav/SuperNav'
import Hero from '../components/organisms/Hero/Hero'
import SimplyOffer from '../components/organisms/SimplyOffer/SimplyOffer'
import Testimonials from '../components/organisms/Testimonials/Testimonials'
import SimplyRealizations from '../components/organisms/SimplyRealizations/SimplyRealizations'
import React from 'react'
import Footer from '../components/organisms/Footer/Footer'

const Home = () => {
  return (
    <>
      <header>
        <SuperNav />
        <Hero />
      </header>
      <main>
        <SimplyOffer />
        <Testimonials />
        <SimplyRealizations />
      </main>
      <Footer />
    </>
  )
}

export default Home
