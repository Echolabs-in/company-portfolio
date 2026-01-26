import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = ({ pageName }) => {
  return (
    <div className="coming-soon-section">
      <div className="coming-soon-content">
        <span className="page-tag">{pageName}</span>
        <h1>Coming Soon</h1>
        <p>We're currently crafting something extraordinary for our {pageName} page. Stay tuned!</p>
        <Link to="/" className="back-home-btn">
          Back to Home
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;

