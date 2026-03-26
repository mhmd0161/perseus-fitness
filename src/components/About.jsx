import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-photo fade-up">
          <div className="photo-frame">
            <div className="photo-placeholder">
              <div className="photo-initials">AS</div>
              <div className="photo-label">[ Coach Photo ]</div>
            </div>
            {/* Decorative corner marks */}
            <div className="corner corner-tl" />
            <div className="corner corner-tr" />
            <div className="corner corner-bl" />
            <div className="corner corner-br" />
          </div>
        </div>

        <div className="about-content fade-up fade-up-delay-2">
          <span className="section-label">Your Coach</span>
          <h2 className="about-name">AZAAN SAJID</h2>

          <ul className="about-story">
            <li>
              <span className="bullet" />
              £1,800/month on the gym floor. No ceiling, no future.
            </li>
            <li>
              <span className="bullet" />
              Built an online business from scratch — no ads, no investor, no shortcuts.
            </li>
            <li>
              <span className="bullet" />
              7 figures in under 3 years using the exact system inside this course.
            </li>
            <li>
              <span className="bullet" />
              Now I help fitness coaches do the same. Faster.
            </li>
          </ul>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-value">3,200+</span>
              <span className="about-stat-label">Coaches Trained</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">£7M+</span>
              <span className="about-stat-label">Client Revenue</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">5★</span>
              <span className="about-stat-label">Avg Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
