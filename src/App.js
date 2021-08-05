import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* <Route exact path='/' component={LandingPage}></Route> */}
          <Route path='/home' render={(props) => <LandingPage {...props} />} />
          <Route
            path='/products'
            render={(props) => <ProductsPage {...props} />}
          />
          <Route
            path='/product'
            render={(props) => <ProductDetailPage {...props} />}
          />
          <Route path='/about' render={(props) => <AboutPage {...props} />} />
          <Route
            path='/contact'
            render={(props) => <ContactPage {...props} />}
          />
          <Route path='/' render={(props) => <LandingPage {...props} />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
