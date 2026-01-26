import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';
import '../App.css';

const BookStrategy = () => {
  return (
    <div className="App">
      <Header />
      <ComingSoon pageName="Book A Strategy Session" />
      <Footer />
    </div>
  );
};

export default BookStrategy;

