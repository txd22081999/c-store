import React from 'react'
import './AboutPage.css'
import About from '../../components/About/About'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const AboutPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <About {...props} />
      <Footer {...props} />
    </div>
  )
}

export default AboutPage
