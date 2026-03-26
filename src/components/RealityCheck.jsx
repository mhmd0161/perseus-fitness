import './RealityCheck.css'

const before = [
  'Posting daily but getting zero clients from it',
  'Hitting an income ceiling trading hours for money',
  'Watching other coaches blow up — wondering what you\'re missing',
  'Tried courses before. Got nothing real from them',
  'No system, no funnel, no recurring income',
]

const after = [
  'A content system that brings clients in while you sleep',
  'A high-ticket offer that sells without chasing leads',
  '5-figure months without adding more hours',
  'A proven framework — not theory',
  'The go-to coach in your niche',
]

export default function RealityCheck() {
  return (
    <section className="reality">
      <div className="reality-inner">
        <div className="reality-header fade-up">
          <span className="section-label">Reality Check</span>
          <h2 className="reality-title">
            THIS WILL EITHER HIT HARD —{' '}
            <span className="gold">OR IT WON'T BE FOR YOU.</span>
          </h2>
        </div>

        <div className="reality-cards">
          <div className="reality-card reality-card--before fade-up fade-up-delay-1">
            <div className="card-tag card-tag--before">WHERE YOU ARE NOW</div>
            <ul>
              {before.map((item, i) => (
                <li key={i}>
                  <span className="dash">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reality-card reality-card--after fade-up fade-up-delay-2">
            <div className="card-tag card-tag--after">WHERE YOU'RE GOING</div>
            <ul>
              {after.map((item, i) => (
                <li key={i}>
                  <span className="arrow">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
