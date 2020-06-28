import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Deal from '../../components/Deal/Deal';
import Section from '../../components/Section/Section';
import Gallery from '../../components/Gallery/Gallery';
import Benefit from '../../components/Benefit/Benefit';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <Section id='id1' type='men' />
      <Deal />
      <Section id='id2' type='women' />
      <Gallery />
      <Benefit />
      <Footer />
    </div>
  );
};

export default LandingPage;
