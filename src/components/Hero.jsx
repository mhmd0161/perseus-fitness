import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Radial glow background */}
      <div className="hero-glow" />
      <div className="hero-glow hero-glow-2" />

      {/* Decorative grid lines */}
      <div className="hero-grid" />

      <div className="hero-inner">
        {/* Perseus icon */}
        <div className="hero-icon fade-up">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25" stroke="rgba(245,158,11,0.3)" strokeWidth="1"/>
            <circle cx="26" cy="26" r="20" stroke="rgba(245,158,11,0.15)" strokeWidth="1"/>
            {/* Helmet shape */}
            <path d="M26 10 C18 10 13 16 13 23 L13 28 C13 30 15 31 17 30 L17 34 C17 36 19 38 26 38 C33 38 35 36 35 34 L35 30 C37 31 39 30 39 28 L39 23 C39 16 34 10 26 10Z" 
                  fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round"/>
            {/* Visor */}
            <path d="M17 25 C19 28 23 30 26 30 C29 30 33 28 35 25" 
                  stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Plume */}
            <path d="M26 10 C26 10 24 6 22 4 C24 5 26 7 26 7 C26 7 28 5 30 4 C28 6 26 10 26 10Z" 
                  fill="#f59e0b" opacity="0.8"/>
          </svg>
        </div>

        {/* Badge */}
        <div className="hero-badge fade-up fade-up-delay-1">
          NOT FOR EVERYONE — ONLY THE SERIOUS
        </div>

        {/* Main headline */}
        <h1 className="hero-headline fade-up fade-up-delay-2">
          <span className="line-white">THE BODY YOU</span>
          <span className="line-white">WANT.</span>
          <span className="line-outline">THE LIFE TO MATCH.</span>
          <span className="line-gold">BUILT HERE.</span>
        </h1>

        {/* Subtext */}
        <p className="hero-sub fade-up fade-up-delay-3">
          Real coaching. Real results. No fads —{' '}
          <strong>just the system that works.</strong>
        </p>

        {/* CTA */}
        <div className="hero-cta-group fade-up fade-up-delay-4">
          <button className="btn-primary" onClick={() => scrollTo('pricing')}>
            GET INSTANT ACCESS →
          </button>
          <div className="hero-trust">
            <span>🔒 SECURE</span>
            <span>⚡ INSTANT ACCESS</span>
            <span>🛡 30-DAY GUARANTEE</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
