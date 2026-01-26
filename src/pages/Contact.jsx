import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
  const [currentStep, setCurrentStep] = useState(1)
  
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    company: '',
    // Step 2
    message: '',
    // Step 3
    help: [],
    budget: '',
    agreement: false
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      help: checked
        ? [...prev.help, value]
        : prev.help.filter(item => item !== value)
    }))
    // Clear error when user selects something
    if (checked && errors.help) {
      setErrors(prev => ({ ...prev, help: '' }))
    }
  }

  const handleRadioChange = (e) => {
    setFormData(prev => ({
      ...prev,
      budget: e.target.value
    }))
    // Clear error when user selects something
    if (errors.budget) {
      setErrors(prev => ({ ...prev, budget: '' }))
    }
  }

  const handleAgreementChange = (e) => {
    setFormData(prev => ({
      ...prev,
      agreement: e.target.checked
    }))
    // Clear error when user checks
    if (e.target.checked && errors.agreement) {
      setErrors(prev => ({ ...prev, agreement: '' }))
    }
  }

  const validateStep = (step) => {
    const newErrors = {}
    
    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required'
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
    }
    
    if (step === 2) {
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required'
      }
    }
    
    if (step === 3) {
      if (formData.help.length === 0) {
        newErrors.help = 'Please select at least one option'
      }
      if (!formData.budget) {
        newErrors.budget = 'Please select a budget range'
      }
      if (!formData.agreement) {
        newErrors.agreement = 'Please agree to receive email communication'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
      // Scroll to top of form
      document.querySelector('.contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.error-message')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      // Scroll to top of form
      document.querySelector('.contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.history.back()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateStep(3)) {
      // Form is valid, you can submit here
      console.log('Form submitted:', formData)
      // Add your form submission logic here (e.g., API call)
      alert('Thank you! Your strategy session request has been submitted.')
      
      // Reset form
      setCurrentStep(1)
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        help: [],
        budget: '',
        agreement: false
      })
      setErrors({})
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.error-message')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name <span className="required">(Required)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span className="required">(Required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </>
        )
      
      case 2:
        return (
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Tell us about your project <span className="required">(Required)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? 'error' : ''}
              placeholder="Describe your project, goals, and any specific requirements..."
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
        )
      
      case 3:
        return (
          <>
            <div className="form-group">
              <label className="form-label">
                What do you need help with? <span className="required">(Required)</span>
              </label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="help"
                    value="improving"
                    checked={formData.help.includes('improving')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Improving My Existing Website</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="help"
                    value="new-website"
                    checked={formData.help.includes('new-website')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Creating A New Website / Full-Redesign</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="help"
                    value="traffic"
                    checked={formData.help.includes('traffic')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Generating More Website Traffic</span>
                </label>
              </div>
              {errors.help && <span className="error-message">{errors.help}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                What's your project budget? <span className="required">(Required)</span>
              </label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="budget"
                    value="<25k"
                    checked={formData.budget === '<25k'}
                    onChange={handleRadioChange}
                  />
                  <span>&lt;$25k</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="budget"
                    value="25-50k"
                    checked={formData.budget === '25-50k'}
                    onChange={handleRadioChange}
                  />
                  <span>$25-50k</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="budget"
                    value="50-100k"
                    checked={formData.budget === '50-100k'}
                    onChange={handleRadioChange}
                  />
                  <span>$50-100k</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="budget"
                    value=">100k"
                    checked={formData.budget === '>100k'}
                    onChange={handleRadioChange}
                  />
                  <span>&gt;$100k</span>
                </label>
              </div>
              {errors.budget && <span className="error-message">{errors.budget}</span>}
            </div>

            <div className="form-group">
              <label className="checkbox-label agreement">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleAgreementChange}
                />
                <span>I agree to receive email communication in response to this contact inquiry</span>
              </label>
              {errors.agreement && <span className="error-message">{errors.agreement}</span>}
            </div>
          </>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-wrapper">
        <div className="contact-top-button">
          <Link to="/book-strategy" className="book-strategy-top">Book Your Strategy Session</Link>
        </div>
        
        <section className="contact-section">
          <div className="contact-container">
            <h1 className="contact-main-title">Memorable Websites Start Here</h1>
            
            <div className="contact-content">
              <div className="contact-expectations">
                <h2 className="expectations-title">What to expect after you click 'submit'</h2>
                <ol className="expectations-list">
                  <li className="expectation-item">
                    <span className="expectation-number">1</span>
                    <span className="expectation-text">We learn everything we can about you, your customers, and your competition to become one team.</span>
                  </li>
                  <li className="expectation-item">
                    <span className="expectation-number">2</span>
                    <span className="expectation-text">We'll come up with the ideal plan to get the results you're looking for.</span>
                  </li>
                  <li className="expectation-item">
                    <span className="expectation-number">3</span>
                    <span className="expectation-text">We execute the strategy with transparent project management so you feel informed and included each step of the way.</span>
                  </li>
                  <li className="expectation-item">
                    <span className="expectation-number">4</span>
                    <span className="expectation-text">We launch your brand new website and you start seeing the results.</span>
                  </li>
                </ol>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-progress">
                  <span className="progress-text">{currentStep}/3</span>
                </div>
                <h2 className="form-title">Request Your Strategy Session</h2>
                
                {renderStepContent()}

                <div className="form-buttons">
                  <button type="button" className="previous-button" onClick={handlePrevious}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L5 15M5 15H15M5 15V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Previous
                  </button>
                  {currentStep < 3 ? (
                    <button type="button" className="submit-button" onClick={handleNext}>
                      Next
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ) : (
                    <button type="submit" className="submit-button">
                      Book A Strategy Session
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

