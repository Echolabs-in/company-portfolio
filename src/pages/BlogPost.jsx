import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    'understanding-the-average-website-lifespan-when-to-redesign': {
      id: 'website-lifespan-redesign',
      category: 'How Often To Redesign Website?',
      title: 'Understanding The Average Website Lifespan & When To Redesign',
      date: 'January 15, 2024',
      author: 'Ecolabs Team',
      imageType: 'lifespan',
      content: `
        <p>Your website is often the first impression potential clients have of your business. But how long should that first impression last before it needs a refresh?</p>
        
        <h2>The Average Website Lifespan</h2>
        <p>Industry research shows that the average website lifespan ranges from 2-3 years before it starts showing signs of age. However, this timeline can vary significantly based on several factors:</p>
        
        <ul>
          <li><strong>Industry Standards:</strong> Technology and design trends evolve rapidly. What looked modern three years ago might now appear outdated.</li>
          <li><strong>Business Growth:</strong> As your company grows, your website needs to reflect that evolution. New services, updated messaging, and expanded capabilities all require updates.</li>
          <li><strong>Technical Performance:</strong> Older websites often struggle with loading speeds, mobile responsiveness, and security vulnerabilities.</li>
          <li><strong>Competitive Landscape:</strong> If your competitors have recently redesigned, your site might look dated in comparison.</li>
        </ul>
        
        <h2>Key Indicators It's Time for a Redesign</h2>
        <p>Beyond the timeline, there are clear signals that your website needs attention:</p>
        
        <ul>
          <li>Declining conversion rates or lead generation</li>
          <li>Poor mobile user experience</li>
          <li>Slow page load times</li>
          <li>Outdated design that doesn't reflect your brand</li>
          <li>Difficulty updating content or adding new features</li>
          <li>Security concerns with outdated technology</li>
        </ul>
        
        <h2>Strategic Redesign Approach</h2>
        <p>A website redesign isn't just about aesthetics—it's a strategic business decision. The best redesigns combine:</p>
        
        <ul>
          <li>Modern, conversion-focused design</li>
          <li>Improved user experience and navigation</li>
          <li>Mobile-first responsive architecture</li>
          <li>SEO optimization for better visibility</li>
          <li>Integration with modern marketing tools</li>
        </ul>
        
        <p>At Ecolabs, we help construction, engineering, and industrial companies create websites that not only look great but drive real business results. If your website is approaching that 2-3 year mark or showing signs of age, it might be time to consider a strategic redesign.</p>
      `
    },
    'the-ultimate-website-redesign-project-plan': {
      id: 'website-redesign-project-plan',
      category: 'Project Planning',
      title: 'The Ultimate Website Redesign Project Plan',
      date: 'February 1, 2024',
      author: 'Ecolabs Team',
      imageType: 'project',
      content: `
        <p>Embarking on a website redesign can feel overwhelming, but with the right plan, it becomes a strategic opportunity to transform your digital presence.</p>
        
        <h2>Phase 1: Discovery & Strategy</h2>
        <p>Before any design work begins, we dive deep into understanding your business, goals, and audience. This phase includes:</p>
        
        <ul>
          <li>Stakeholder interviews and goal alignment</li>
          <li>Competitive analysis and market research</li>
          <li>User persona development</li>
          <li>Content audit and strategy</li>
          <li>Technical requirements assessment</li>
        </ul>
        
        <h2>Phase 2: Design & Development</h2>
        <p>With a clear strategy in place, we move into the creative and technical execution:</p>
        
        <ul>
          <li>Wireframing and information architecture</li>
          <li>Visual design and brand integration</li>
          <li>Responsive development across all devices</li>
          <li>Content management system setup</li>
          <li>Third-party integrations</li>
        </ul>
        
        <h2>Phase 3: Testing & Launch</h2>
        <p>Quality assurance ensures your new site performs flawlessly:</p>
        
        <ul>
          <li>Cross-browser and device testing</li>
          <li>Performance optimization</li>
          <li>SEO implementation</li>
          <li>User acceptance testing</li>
          <li>Launch and post-launch support</li>
        </ul>
        
        <p>A well-planned redesign project typically takes 12-16 weeks from kickoff to launch, depending on scope and complexity. The key is having a clear roadmap and experienced partners who understand your industry.</p>
      `
    },
    'high-converting-service-page-design-examples': {
      id: 'high-converting-service-pages',
      category: 'Design Examples',
      title: '10+ High Converting Service Page Design Examples',
      date: 'February 20, 2024',
      author: 'Ecolabs Team',
      imageType: 'conversion',
      content: `
        <p>Service pages are where potential clients decide whether your company is the right fit. Here's what makes them convert.</p>
        
        <h2>Essential Elements of High-Converting Service Pages</h2>
        <p>After analyzing hundreds of successful service pages, we've identified key patterns:</p>
        
        <ul>
          <li><strong>Clear Value Proposition:</strong> Immediately communicate what you do and why it matters</li>
          <li><strong>Social Proof:</strong> Case studies, testimonials, and client logos build trust</li>
          <li><strong>Detailed Service Breakdown:</strong> Explain your process and what clients can expect</li>
          <li><strong>Strong CTAs:</strong> Multiple, strategically placed calls-to-action guide users to take action</li>
          <li><strong>Visual Storytelling:</strong> Images, videos, and graphics make complex services understandable</li>
        </ul>
        
        <h2>Design Patterns That Work</h2>
        <p>While every industry is different, certain design patterns consistently drive conversions:</p>
        
        <ul>
          <li>Hero sections with clear headlines and supporting visuals</li>
          <li>Step-by-step process explanations</li>
          <li>Before/after comparisons or case study highlights</li>
          <li>FAQ sections addressing common concerns</li>
          <li>Related services or complementary offerings</li>
        </ul>
        
        <h2>Industry-Specific Considerations</h2>
        <p>For B2B companies in construction, engineering, and industrial sectors, service pages need to:</p>
        
        <ul>
          <li>Demonstrate technical expertise and capabilities</li>
          <li>Showcase project portfolios and past work</li>
          <li>Highlight certifications, safety records, and compliance</li>
          <li>Make it easy for prospects to request quotes or consultations</li>
        </ul>
        
        <p>The best service pages don't just describe what you do—they help potential clients visualize working with you and taking the next step in their buyer's journey.</p>
      `
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="App">
        <Header />
        <div className="blog-post-not-found">
          <h1>Post Not Found</h1>
          <Link to="/resources">Back to Resources</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <article className="blog-post">
        <div className="blog-post-hero">
          <div className="stars-background"></div>
          <div className="blog-post-container">
            <span className="blog-post-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="blog-post-illustration">
            <div className="website-wireframe">
              <div className="wireframe-window">
                <div className="wireframe-header"></div>
                <div className="wireframe-content">
                  <div className="wireframe-line"></div>
                  <div className="wireframe-line"></div>
                  <div className="wireframe-line"></div>
                  <div className="wireframe-image-placeholder"></div>
                  <div className="wireframe-image-placeholder"></div>
                </div>
              </div>
            </div>
            <div className="calendar-icon calendar-left">
              <div className="calendar-grid"></div>
            </div>
            <div className="calendar-icon calendar-right">
              <div className="calendar-grid"></div>
            </div>
          </div>
        </div>

        <div className="blog-post-content-wrapper">
          <div className="blog-post-content">
            <div 
              className="blog-post-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        <div className="blog-post-footer">
          <CTASection />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;

