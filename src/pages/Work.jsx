import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';
import '../App.css';

const Work = () => {
  return (
    <div className="App">
      <Header />
      <ComingSoon pageName="Work" />
      <Footer />
    </div>
  );
};

export default Work;

