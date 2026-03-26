import './Pricing.css'

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-inner">
        <div className="pricing-header fade-up">
          <span className="section-label">Enrol Today</span>
          <h2 className="pricing-title">
            ONE INVESTMENT.<br />
            <span className="gold">LIFETIME ACCESS.</span>
          </h2>
        </div>

        <div className="pricing-card fade-up fade-up-delay-1">
          {/* Corner marks */}
          <div className="p-corner p-corner-tl" />
          <div className="p-corner p-corner-tr" />
          <div className="p-corner p-corner-bl" />
          <div className="p-corner p-corner-br" />

          <div className="pricing-was">Was £1,732</div>
          <div className="pricing-price">
            <span className="price-currency">£</span>
            <span className="price-amount">497</span>
          </div>
          <div className="pricing-term">ONE-TIME · NO RECURRING FEES</div>

          <button
            className="btn-enrol"
            onClick={() => window.open('#', '_blank')}
          >
            ENROL NOW — GET INSTANT ACCESS →
          </button>

          <div className="pricing-secure">
            🔒 SECURE CHECKOUT VIA STRIPE
          </div>

          <div className="pricing-guarantee">
            <span className="guarantee-icon">🛡</span>
            <div>
              <strong>30-Day Guarantee.</strong> Do the work, don't get results — full refund. No questions.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
