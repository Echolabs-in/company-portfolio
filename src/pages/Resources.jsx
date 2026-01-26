import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Resources.css';

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Design', 'Development', 'Marketing', 'SEO', 'Strategy'];

  const articles = [
    {
      id: 1,
      title: "Why the Smartest Strategies Use Both Traditional SEO and AI SEO",
      category: "SEO",
      thumbnail: "seo-ai"
    },
    {
      id: 2,
      title: "SaaS Pricing Page Examples: The Anatomy of a High-Converting Page",
      category: "Marketing",
      thumbnail: "saas-pricing"
    },
    {
      id: 3,
      title: "Mastering B2B Local SEO: Essential Strategies for Business Growth",
      category: "SEO",
      thumbnail: "local-seo"
    },
    {
      id: 4,
      title: "Modern Web Design Trends: What Works in 2024",
      category: "Design",
      thumbnail: "design-trends"
    },
    {
      id: 5,
      title: "Building Scalable React Applications: Best Practices",
      category: "Development",
      thumbnail: "react-scalable"
    },
    {
      id: 6,
      title: "Content Marketing Strategy for B2B Companies",
      category: "Marketing",
      thumbnail: "content-marketing"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="App">
      <Header />
      <div className="resources-page">
        <div className="resources-container">
          <div className="resources-header">
            <span className="resources-tag">All Resources</span>
            <h1 className="resources-title">Echolabs Resource Hub</h1>
            <p className="resources-description">
              Want to learn more about website strategy? You're in the right place. Our multi-media collection of resources can level up the strategic thinking of most experienced marketer.
            </p>
          </div>

          <div className="resources-controls">
            <div className="filter-buttons">
              {filters.map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search posts..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="articles-grid">
            {filteredArticles.map(article => (
              <div key={article.id} className="article-card">
                <div className="article-thumbnail">
                  <div className={`thumbnail-placeholder thumbnail-${article.thumbnail}`}>
                    {article.thumbnail === 'seo-ai' && (
                      <div className="thumbnail-content">
                        <div className="robot-illustration">
                          <div className="robot-body"></div>
                          <div className="robot-head"></div>
                          <div className="lightning"></div>
                        </div>
                      </div>
                    )}
                    {article.thumbnail === 'saas-pricing' && (
                      <div className="thumbnail-content">
                        <div className="pricing-illustration">
                          <div className="dollar-signs">$$$</div>
                          <div className="pricing-circle">SaaS Pricing</div>
                        </div>
                      </div>
                    )}
                    {article.thumbnail === 'local-seo' && (
                      <div className="thumbnail-content">
                        <div className="map-illustration">
                          <div className="map-pin"></div>
                          <div className="map-pin"></div>
                          <div className="map-pin"></div>
                          <div className="stars">★★★★★</div>
                        </div>
                      </div>
                    )}
                    {article.thumbnail === 'design-trends' && (
                      <div className="thumbnail-content">
                        <div className="design-illustration">
                          <div className="design-box"></div>
                          <div className="design-box"></div>
                          <div className="design-box"></div>
                        </div>
                      </div>
                    )}
                    {article.thumbnail === 'react-scalable' && (
                      <div className="thumbnail-content">
                        <div className="code-illustration">
                          <div className="code-line"></div>
                          <div className="code-line"></div>
                          <div className="code-line"></div>
                        </div>
                      </div>
                    )}
                    {article.thumbnail === 'content-marketing' && (
                      <div className="thumbnail-content">
                        <div className="content-illustration">
                          <div className="content-box"></div>
                          <div className="content-arrow"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="article-title">{article.title}</h3>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-results">
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
