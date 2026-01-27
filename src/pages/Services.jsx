import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaseStudiesSection from '../components/CaseStudiesSection'
import CTASection from '../components/CTASection'
import './Services.css'

function Services() {
  return (
    <div className="App">
      <Header />
      <section className="services-hero">
        <div className="services-hero-container">
          <div className="services-hero-content">
            <div className="services-tag">Digital Agency Services</div>
            
            <h1 className="services-hero-headline">
              Big Ideas Are Great,<br />
              Big Results Are Better
            </h1>
            
            <p className="services-hero-description">
              From breakthrough strategies to custom platforms and branding that actually converts, our teams dig in together to create digital experiences that move the needle and make your business impossible to ignore.
            </p>
            
            <div className="services-cta-group">
              <Link to="/book-strategy" className="services-cta-primary">
                Book A Strategy Session
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/services" className="services-cta-secondary">
                Instant Website Estimate
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services-content-section">
        <div className="services-content-container">
          <h2 className="services-content-title">We Help Companies Like Yours In 3 Distinct Ways...</h2>
          
          {/* Section 1: Text Left, Image Right */}
          <div className="services-content-grid">
            <div className="services-content-left">
              <div className="services-pricing-tag">Starting at $25,000</div>
              
              <h3 className="services-content-heading">Build the website you've always wanted</h3>
              
              <p className="services-content-description">
                You deserve more than "good enough." We'll help you create the website your brand truly deserves —one that checks every box—strategic, stunning, easy to manage, and built to perform.
              </p>
              
              
              <div className="services-key-services">
                <h4 className="key-services-title">Key Services:</h4>
                <div className="key-services-list">
                  <div className="key-services-column">
                    <div className="key-service-item">Website Redesign</div>
                    <div className="key-service-item">Web Development</div>
                    <div className="key-service-item">Branding</div>
                  </div>
                  <div className="key-services-column">
                    <div className="key-service-item">WordPress</div>
                    <div className="key-service-item">Hubspot</div>
                    <div className="key-service-item">Webflow</div>
                  </div>
                </div>
              </div>
              
              <div className="services-content-buttons">
                <Link to="/book-strategy" className="services-content-cta-primary">
                  Book A Strategy Session
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/services" className="services-content-cta-secondary">
                  What To Expect With A Redesign
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className="services-testimonial">
                <div className="testimonial-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  "Echolabshas truly seen where we can take the website and make it look significantly different from all of our competitors. That's been our main reason for engaging them. If you're looking for a vendor with a unique perspective, then Echolabsis the firm."
                </p>
              </div>
            </div>
            
            <div className="services-content-right">
              <img src="/images/unique-design-1024x1024-services1.jpg" alt="Services" className="services-image" />
            </div>
          </div>
          
          {/* Section 2: Image Left, Text Right */}
          <div className="services-content-grid services-content-grid-reverse">
            <div className="services-content-left">
              <div className="services-pricing-tag">Starting at $2,500 / Month</div>
              
              <h3 className="services-content-heading">Support your organizations greatest marketing asset</h3>
              
              <p className="services-content-description">
                Your website is your most important marketing tool. We help you maintain, improve, and optimize it so it continues to attract the right visitors, converts them into customers, and supports your long-term growth.
              </p>
              
              <div className="services-content-buttons">
                <Link to="/book-strategy" className="services-content-cta-primary">
                  Book A Strategy Session
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/services" className="services-content-cta-secondary">
                  How We Deliver Website Support
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className="services-testimonial">
                <div className="testimonial-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  "The support team rocks! Whenever we have a request, it's met with near instantaneous response, and a quick resolution."
                </p>
                <p className="testimonial-author">Amanda Bruhn, Web Marketing Manager at BetterCloud</p>
              </div>
            </div>
            
            <div className="services-content-right">
              <img src="/images/superior-support-1024x1024-services2.jpg" alt="Services" className="services-image" />
            </div>
          </div>
          
          {/* Section 3: Text Left, Image Right */}
          <div className="services-content-grid">
            <div className="services-content-left">
              <div className="services-pricing-tag">Starting at $15,000</div>
              
              <h3 className="services-content-heading">Grow your website with data-driven improvements</h3>
              
              <p className="services-content-description">
                Don't wait years between redesigns. Our growth-driven design approach helps you continuously improve your website based on real user data, ensuring it evolves with your business and delivers better results over time.
              </p>
              
              <div className="services-content-buttons">
                <Link to="/book-strategy" className="services-content-cta-primary">
                  Book A Strategy Session
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/services" className="services-content-cta-secondary">
                  Learn About Growth-Driven Design
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className="services-testimonial">
                <div className="testimonial-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  "The continuous improvement approach has transformed how we think about our website. We're seeing measurable results every month."
                </p>
              </div>
            </div>
            
            <div className="services-content-right">
              <img src="/images/growth-driven-design-1024x1024-services3.jpg" alt="Services" className="services-image" />
            </div>
          </div>
        </div>
      </section>
      
      <CaseStudiesSection />
      <CTASection />
      
      <Footer />
    </div>
  )
}

export default Services
