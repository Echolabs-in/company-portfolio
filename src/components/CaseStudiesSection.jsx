import './CaseStudiesSection.css'

function CaseStudiesSection() {
  const caseStudies = [
    ,{
      name: "MLM Union",
      image: "/images/mlm-client.png"
    },
    {
      name: "Tripgate",
      image: "/images/tripgate-client2.png"
    },
    {
      name: "Codify",
      image: "/images/codify-client.png"
    },
    {
      name: "Newlife",
      image: "/images/newlife-client.png"
    }
    ,{
      name: "Trip Tales Pay",
      image: "/images/triptales-client.png"
    }
  ]

  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <div className="case-studies-content">
          <h2 className="case-studies-title">
            When Our Clients Win, We Win
          </h2>
          <p className="case-studies-text">
            Every case study here is a reflection of that mindset. These aren't just project highlights —they're proof that when our clients succeed, so do we. Their wins are our benchmark, and we're proud to share the results.
          </p>
        </div>
        
        <div className="case-studies-images">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-item">
              <div className="case-study-image-container">
                <img 
                  src={study.image} 
                  alt={study.name}
                  className="case-study-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="case-study-placeholder" style={{ display: 'none' }}>
                  <span>{study.name}</span>
                </div>
              </div>
              <h3 className="case-study-name">{study.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection

