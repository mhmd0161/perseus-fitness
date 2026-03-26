import './Testimonials.css'

const testimonials = [
  {
    stars: 5,
    text: 'Stuck at £2k for over a year. Within 90 days I hit £12k. The content framework alone was worth 10x the price.',
    name: 'Jamie R.',
    handle: '@jamiefit',
    badge: '£12k/month in 90 days',
  },
  {
    stars: 5,
    text: 'Enrolled on a Sunday. By month 4 I had replaced my full PT income. This is the real deal — no fluff.',
    name: 'Marcus T.',
    handle: '@coach_marcus',
    badge: 'Quit his PT job',
  },
  {
    stars: 5,
    text: 'Went from 600 followers to 47k in 5 months. Full coaching roster. Module 3 is insane.',
    name: 'Sophie H.',
    handle: '@sophiehfit',
    badge: '0 → 47k followers',
  },
  {
    stars: 5,
    text: 'Sceptical — bought courses before that delivered nothing. This is different. Hit £5k in week 10.',
    name: 'Dan K.',
    handle: '@dankcoach',
    badge: 'First £5k month',
  },
  {
    stars: 5,
    text: "The positioning module was exactly what I was missing. 4x'd my revenue as a female coach.",
    name: 'Priya M.',
    handle: '@priyamoves',
    badge: '4x revenue in 6 months',
  },
  {
    stars: 5,
    text: 'Three years on the floor. Tried going online twice and failed. This showed me exactly where I went wrong.',
    name: 'Lee W.',
    handle: '@leeWcoaching',
    badge: 'Left gym floor for good',
  },
]

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="proof" className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header fade-up">
          <span className="section-label">Proof</span>
          <h2 className="testimonials-title">
            THEY WERE EXACTLY WHERE{' '}
            <span className="gold">YOU ARE NOW.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card fade-up fade-up-delay-${Math.min((i % 3) + 1, 5)}`}
            >
              <Stars count={t.stars} />
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <span className="author-name">{t.name}</span>
                  <span className="author-handle">{t.handle}</span>
                </div>
                <span className="testimonial-badge">{t.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
