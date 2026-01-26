import { Link } from 'react-router-dom'
import './CTASection.css'

function CTASection() {
  return (
    <section className="cta-section">
      
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">
            What Are You Waiting For?
          </div>
          
          <h2 className="cta-headline">
            Take Your Website From<br />
            A Burden → Greatest Asset.
          </h2>
          
          <p className="cta-description">
            Your website shouldn't slow you down—it should drive real results. We turn underperforming sites into
            powerful growth engines that attract leads, close deals, and elevate your brand.
          </p>
          
          <div className="cta-buttons">
            <Link to="/book-strategy" className="cta-button-primary">
              Book A Strategy Session
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/services" className="cta-button-secondary">
              Instant Website Estimate
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default CTASection

