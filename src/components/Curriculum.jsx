import { useState } from 'react'
import './Curriculum.css'

const modules = [
  {
    number: '01',
    title: 'THE FOUNDATION',
    lessons: 6,
    description: 'Niche locked. Offer defined. Position yourself as the only choice in your market.',
    topics: ['Niche Domination Framework', 'Offer Architecture', 'Market Positioning', 'Identity & Brand Story', 'Competitor Mapping', 'Your Signature Methodology'],
  },
  {
    number: '02',
    title: 'CONTENT THAT CONVERTS',
    lessons: 8,
    description: 'Stop creating content that gets likes and starts getting clients.',
    topics: ['The Conversion Content Matrix', 'Hook Engineering', 'Authority Pillars', 'Story-Driven Sales', 'Content Calendar System', 'Repurposing Framework', 'Viral Mechanics', 'DM Triggers'],
  },
  {
    number: '03',
    title: 'AUDIENCE GROWTH',
    lessons: 7,
    description: 'Build an audience of buyers — not followers.',
    topics: ['The Growth Engine', 'Collab Strategy', 'Platform Algorithms', 'Engagement Loops', 'List Building', 'Community Architecture', 'Traffic Funnels'],
  },
  {
    number: '04',
    title: 'HIGH-TICKET OFFER',
    lessons: 5,
    description: 'Design and price a premium offer that sells itself.',
    topics: ['Offer Stacking', 'Price Psychology', 'Delivery Systemisation', 'Guarantee Design', 'The Value Ladder'],
  },
  {
    number: '05',
    title: 'SALES WITHOUT SELLING',
    lessons: 6,
    description: 'The conversation framework that closes at 70%+ without pressure.',
    topics: ['The Qualifying Framework', 'Discovery Call Blueprint', 'Objection Elimination', 'The Soft Close', 'Follow-Up Sequences', 'DM Sales Scripts'],
  },
  {
    number: '06',
    title: 'SCALE & AUTOMATE',
    lessons: 7,
    description: 'Remove yourself from the machine. 5-figures on autopilot.',
    topics: ['Automation Stack', 'Team Building', 'Passive Revenue Streams', 'Systems & SOPs', 'Funnel Architecture', 'Paid Traffic Intro', 'Exit Strategy'],
  },
]

export default function Curriculum() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="curriculum" className="curriculum">
      <div className="curriculum-inner">
        <div className="curriculum-header fade-up">
          <span className="section-label">Inside the Programme</span>
          <h2 className="curriculum-title">
            39 LESSONS.<br />
            <span className="gold">ZERO FILLER.</span>
          </h2>
        </div>

        <div className="modules-list">
          {modules.map((mod, i) => (
            <div
              key={i}
              className={`module module-entrance ${openIdx === i ? 'open' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="module-header">
                <div className="module-left">
                  <span className="module-num">{mod.number}</span>
                  <span className="module-title">{mod.title}</span>
                </div>
                <div className="module-right">
                  <span className="module-lessons">{mod.lessons} LESSONS</span>
                  <span className={`module-toggle ${openIdx === i ? 'up' : 'down'}`}>
                    {openIdx === i ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {openIdx === i && (
                <div className="module-body">
                  <p className="module-desc">{mod.description}</p>
                  <ul className="module-topics">
                    {mod.topics.map((t, j) => (
                      <li key={j}>
                        <span className="topic-dot" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
