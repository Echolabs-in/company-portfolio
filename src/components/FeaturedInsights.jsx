import './FeaturedInsights.css'

function FeaturedInsights() {
  const insights = [
    {
      title: "Understanding The Average Website Lifespan & When To Redesign",
      tags: ["Strategy"],
      imageType: "lifespan"
    },
    {
      title: "The Ultimate Website Redesign Project Plan",
      tags: ["Strategy"],
      imageType: "project"
    },
    {
      title: "10+ High Converting Service Page Design Examples",
      tags: ["Design", "Strategy"],
      imageType: "conversion"
    }
  ]

  return (
    <section className="featured-insights">
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-title">Featured Insights</h2>
          <button className="insights-view-all">
            View All Resources
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="insights-cards">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-image-container">
                <img 
                  src="" 
                  alt={insight.title}
                  className="insight-image"
                  style={{ display: 'none' }}
                />
                <div className="insight-tags-top">
                  <button className="tag-blog">Blog</button>
                  <button className="tag-featured">Featured</button>
                </div>
              </div>
              
              <h3 className="insight-card-title">{insight.title}</h3>
              
              <div className="insight-tags-bottom">
                {insight.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="insight-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedInsights

