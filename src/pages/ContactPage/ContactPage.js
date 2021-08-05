import React from 'react'
import Contact from '../../components/Contact/Contact'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const ContactPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <Contact {...props} />
      <Footer {...props} />
    </div>
  )
}

export default ContactPage
