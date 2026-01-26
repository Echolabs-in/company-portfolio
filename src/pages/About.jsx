import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';
import '../App.css';

const About = () => {
  return (
    <div className="App">
      <Header />
      <ComingSoon pageName="About" />
      <Footer />
    </div>
  );
};

export default About;

