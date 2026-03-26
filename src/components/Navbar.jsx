import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          <span className="logo-p">P</span>
          <span className="logo-text">ERSEUS</span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('curriculum')}>Curriculum</button>
          <button onClick={() => scrollTo('proof')}>Results</button>
          <button onClick={() => scrollTo('pricing')} className="nav-cta">
            Enrol Now →
          </button>
        </div>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
