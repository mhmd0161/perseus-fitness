import './Includes.css'

const items = [
  { label: 'Core Programme — 6 Modules, 39 Lessons', value: '£997' },
  { label: 'Private Community (Discord)', value: '£197' },
  { label: 'Content Calendar Templates', value: '£97' },
  { label: 'High-Ticket Offer Builder Workbook', value: '£147' },
  { label: 'Bonus: DM Sales Script Pack', value: '£97' },
  { label: 'Bonus: Niche Domination Masterclass', value: '£197' },
]

const total = '£1,732'

export default function Includes() {
  return (
    <section className="includes">
      <div className="includes-inner">
        <div className="includes-header fade-up">
          <span className="section-label">What You're Getting</span>
          <h2 className="includes-title">EVERYTHING INCLUDED</h2>
        </div>

        <div className="includes-card fade-up fade-up-delay-1">
          {items.map((item, i) => (
            <div key={i} className="include-row">
              <div className="include-left">
                <span className="include-check">✓</span>
                <span className="include-label">{item.label}</span>
              </div>
              <span className="include-value">{item.value}</span>
            </div>
          ))}
          <div className="include-total">
            <span>TOTAL VALUE</span>
            <span className="total-value">{total}</span>
          </div>
        </div>

        <p className="includes-note fade-up fade-up-delay-2">
          You get all of this — for a single payment of <strong>£497</strong>
        </p>
      </div>
    </section>
  )
}
