import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';
import '../App.css';

const Services = () => {
  return (
    <div className="App">
      <Header />
      <ComingSoon pageName="Services" />
      <Footer />
    </div>
  );
};

export default Services;

