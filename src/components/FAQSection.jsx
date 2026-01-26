import { useState } from 'react'
import './FAQSection.css'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "Website costs vary based on your specific needs, complexity, and requirements. Contact us for a personalized quote."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on the scope and complexity of your project. Typically, websites take 6-12 weeks from start to launch."
    },
    {
      question: "What results should I expect?",
      answer: "You can expect improved user experience, better conversion rates, increased traffic, and a professional online presence that reflects your brand."
    },
    {
      question: "Do you support the website after it's launched?",
      answer: "Yes, we offer ongoing website support and maintenance services to ensure your site stays updated, secure, and performing optimally."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-content">
          <h2 className="faq-title">You're Probably Wondering...</h2>
          <p className="faq-text">
            Web design agencies are all over the map—on price, timeline, and offer.
          </p>
          <p className="faq-question">Why?</p>
          <p className="faq-text">
            Because every agency operates under different constraints: team quality, location, approach, and cost of labor.
          </p>
          <p className="faq-conclusion">
            So let's cut through the noise and show you exactly where Echolabs stands.
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question-button"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

