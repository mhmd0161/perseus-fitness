import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
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

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    let ringX = -100, ringY = -100
    let animId

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setHovering(!!(el && el.closest('button, a, [data-hover]')))
    }

    const animate = () => {
      ringX += (window._cursorX - ringX) * 0.12
      ringY += (window._cursorY - ringY) * 0.12
      setRingPos({ x: ringX, y: ringY })
      animId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e) => {
      window._cursorX = e.clientX
      window._cursorY = e.clientY
      onMove(e)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', () => setClicking(true))
    window.addEventListener('mouseup', () => setClicking(false))
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className={`cursor ${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`}>
      <div className="cursor-ring" style={{ left: ringPos.x, top: ringPos.y, position: 'fixed' }} />
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y, position: 'fixed' }} />
    </div>
  )
}

function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={`sticky-cta ${visible ? 'visible' : ''}`}>
      <div className="sticky-cta-text">
        <strong>£497 one-time</strong> — Lifetime access. 30-day guarantee.
      </div>
      <button
        className="sticky-cta-btn"
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      >
        ENROL NOW →
      </button>
    </div>
  )
}

export default function App() {
  useScrollReveal()
  useProgressBar()

  return (
    <>
      <div className="progress-bar" />
      <CustomCursor />
      <StickyCTA />
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
      <Analytics />
    </>
  )
}
