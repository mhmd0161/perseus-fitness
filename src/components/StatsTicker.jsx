import './StatsTicker.css'

const stats = [
  { value: '3.2k+', label: 'Enrolled' },
  { value: '7 Fig', label: 'Revenue Generated' },
  { value: '94%', label: 'Completion Rate' },
  { value: '12k+', label: 'Coached' },
  { value: '£7M+', label: 'Client Revenue' },
  { value: '5★', label: 'Average Rating' },
]

export default function StatsTicker() {
  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-item fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
