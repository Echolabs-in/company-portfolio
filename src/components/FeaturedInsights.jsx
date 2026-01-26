import { Link } from 'react-router-dom'
import './FeaturedInsights.css'

function FeaturedInsights() {
  const insights = [
    {
      id: 'website-lifespan-redesign',
      slug: 'understanding-the-average-website-lifespan-when-to-redesign',
      title: "Understanding The Average Website Lifespan & When To Redesign",
      tags: ["Strategy"],
      imageType: "lifespan",
      category: "How Often To Redesign Website?",
      image: "/images/featured1.png"
    },
    {
      id: 'website-redesign-project-plan',
      slug: 'the-ultimate-website-redesign-project-plan',
      title: "A Step-by-Step Framework for Modern Website Success",
      tags: ["Strategy"],
      imageType: "project",
      category: "Project Planning",
      image: "/images/featured2.png"
    },
    {
      id: 'high-converting-service-pages',
      slug: 'high-converting-service-page-design-examples',
      title: "10+ High Converting Service Page Design Examples",
      tags: ["Design", "Strategy"],
      imageType: "conversion",
      category: "Design Examples",
      image: "/images/Featured3.jpg"
    }
  ]

  return (
    <section className="featured-insights">
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-title">Featured Insights</h2>
          <Link to="/resources" className="insights-view-all">
            View All Resources
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className="insights-cards">
          {insights.map((insight) => (
            <Link key={insight.id} to={`/blog/${insight.slug}`} className="insight-card-link">
              <div className="insight-card">
                <div className="insight-image-container">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="insight-image"
                  />
                  <div className="insight-tags-top">
                    <span className="tag-blog">Blog</span>
                    <span className="tag-featured">Featured</span>
                  </div>
                </div>
                
                <h3 className="insight-card-title">{insight.title}</h3>
                
                <div className="insight-tags-bottom">
                  {insight.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="insight-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedInsights

