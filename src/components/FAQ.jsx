import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Who is this for?',
    a: 'This is for fitness coaches who are already working with clients but feel stuck — either on the gym floor or online without a real system. If you\'re serious about building a sustainable online coaching business with real income, this is built for you.',
  },
  {
    q: 'Do I need a big following?',
    a: 'No. Many of our top students started with under 1,000 followers. The system teaches you how to convert a small, targeted audience into high-ticket clients — not how to chase vanity metrics.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Students who implement the framework typically see their first high-ticket client within 30-60 days. Results depend on your effort and starting point, but the system is designed for speed — not 6-month theory.',
  },
  {
    q: 'Is this just a content course?',
    a: 'No. Content is only one of six modules. This is a complete business-building system: offer design, sales, audience growth, automation, and scaling. Content is the front door — what\'s inside is the whole house.',
  },
  {
    q: 'What if I\'ve failed with courses before?',
    a: 'Most courses sell theory. This sells a system. Every module has a specific outcome, an action step, and a template you can use immediately. If you\'ve been burned before, this is why we also offer a 30-day money-back guarantee.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes — 30-day money-back guarantee. Do the work inside the programme, implement the framework, and if you don\'t see a path to results, we\'ll refund you in full. No questions, no chasing.',
  },
  {
    q: 'Can I do this while still PT-ing full time?',
    a: 'Absolutely. The programme is self-paced and designed around a busy schedule. Many students completed it during evenings and weekends while still coaching clients. Your first priority is getting to the point where you no longer have to.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="faq">
      <div className="faq-inner">
        <div className="faq-header fade-up">
          <span className="section-label">FAQs</span>
          <h2 className="faq-title">STILL HAVE QUESTIONS?</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item faq-entrance ${openIdx === i ? 'open' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="faq-q">
                <span>{item.q}</span>
                <span className="faq-icon">{openIdx === i ? '−' : '+'}</span>
              </div>
              {openIdx === i && (
                <div className="faq-a">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta fade-up">
          <button
            className="btn-gold"
            style={{ padding: '1.1rem 3rem', border: 'none', borderRadius: '100px', fontSize: '1rem', fontFamily: 'var(--font-condensed)', fontWeight: 800, letterSpacing: '0.15em', background: 'var(--white)', color: 'var(--dark)', cursor: 'pointer', transition: 'all 0.25s' }}
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET INSTANT ACCESS →
          </button>
        </div>
      </div>
    </section>
  )
}
