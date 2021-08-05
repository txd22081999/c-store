import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import Deal from '../../components/Deal/Deal'
import Section from '../../components/Section/Section'
import Gallery from '../../components/Gallery/Gallery'
import Benefit from '../../components/Benefit/Benefit'
import Footer from '../../components/Footer/Footer'

const LandingPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <Banner {...props} />
      <Category {...props} />
      <Section id='id1' type='men' {...props} />
      <Deal {...props} />
      <Section id='id2' type='women' {...props} />
      <Gallery {...props} />
      <Section id='id3' type='kid' {...props} />
      <Benefit {...props} />
      <Footer {...props} />
    </div>
  )
}

export default LandingPage
