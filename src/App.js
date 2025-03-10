import React from 'react';
import Header from './Header';
import Parallax from './Parallax';
import ContentSection from './ContentSection';
import Services from './Services';
import Footer from './Footer';

const App = () => {
  return (
    <div className="bg-aliceblue min-h-screen overflow-x-hidden">
      <Header/>
      <Parallax/>
      <ContentSection/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default App;