import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-section">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/astro-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="tag-badge">Echolabs | B2B Digital Agency</div>
          
          <h1 className="hero-headline">
            You Focus On Shaping The <br />
            Future, We'll Handle The Website.
          </h1>
          
          <p className="hero-description">
            At Ecolabs, we build memorable websites for ambitious construction, 
            engineering, and industrial companies that establish them as market 
            leaders, attract investors, and earn the trust of the right customers.
          </p>
          
          <div className="hero-cta-group">
            <Link to="/book-strategy" className="cta-primary">
              Book A Strategy Session
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/services" className="cta-secondary">
              Instant Website Estimate
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          <div className="trusted-by">
            <span className="trusted-by-text">Trusted By</span>
            <div className="trusted-by-logos">
              {/* Logo placeholders would go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

