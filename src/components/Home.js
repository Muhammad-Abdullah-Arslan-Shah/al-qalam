import React from 'react';
import CarouselComponent from './Carousel';
import AboutText from './AboutText';
import RegMsg from './RegMsg';
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} />
      <CarouselComponent style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }} /> 
      <AboutText style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} />
      <RegMsg style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }} />
      <Footer style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }} />
    </>
  );
}

export default Home;
