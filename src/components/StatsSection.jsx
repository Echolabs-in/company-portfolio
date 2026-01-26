import { Link } from 'react-router-dom'
import './StatsSection.css'

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-title">
          After A Website Redesign,<br />
          Our Clients Typically Experience...
        </h2>
        
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">+ 83%</div>
            <div className="stat-label">Organic Traffic</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-value">+ 94%</div>
            <div className="stat-label">More Conversions</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-value">+ 91%</div>
            <div className="stat-label">Qualified Leads</div>
          </div>
        </div>
        
        <div className="stats-buttons">
          <Link to="/book-strategy" className="stats-button-primary">
            Book A Strategy Session
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <button className="stats-button-secondary">
            Instant Website Estimate
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default StatsSection

