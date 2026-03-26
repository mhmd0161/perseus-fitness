import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsTicker from './components/StatsTicker'
import RealityCheck from './components/RealityCheck'
import About from './components/About'
import Curriculum from './components/Curriculum'
import Testimonials from './components/Testimonials'
import Includes from './components/Includes'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { useScrollReveal, useProgressBar } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
  useProgressBar()

  return (
    <>
      <div className="progress-bar" />
      <Navbar />
      <main>
        <Hero />
        <StatsTicker />
        <RealityCheck />
        <About />
        <Curriculum />
        <Testimonials />
        <Includes />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
