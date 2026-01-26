import './ServicesSection.css'

function ServicesSection() {
  const services = [
    {
      title: "Build the website you've always wanted",
      items: [
        "Customized Digital Strategy",
        "UI/UX Design",
        "Copywriting",
        "Full-Stack Web Development"
      ],
      buttonText: "Get The Web Design Deets"
    },
    {
      title: "Support your organizations greatest marketing asset",
      items: [
        "Proactive Malware Detection",
        "Performance Optimization",
        "99.9% Uptime Guarantee",
        "Strategic Website Improvements"
      ],
      buttonText: "All The Support You Need"
    },
    {
      title: "Grow your brand with a thriving digital presence",
      items: [
        "20% Organic Growth Guarantee",
        "End-to-end Content Team",
        "SEO Optimization",
        "Content Marketing"
      ],
      buttonText: "Explore Our SEO Services"
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">
          Three Smart Ways Echolabs Helps <br />  Companies Like Yours Move Forward...
        </h2>
        
        <div className="services-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-card-title">{service.title}</h3>
              
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="service-item">
                    <svg className="checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#cf0f54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="service-button">
                {service.buttonText}
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

