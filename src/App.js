import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductList from './pages/ProductsPage/ProductsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/home' component={LandingPage}></Route>
          <Route exact path='/products' component={ProductsPage}></Route>
          <Route exact path='/product' component={ProductDetailPage}></Route>
          <Route exact path='/about' component={AboutPage}></Route>
          <Route exact path='/contact' component={ContactPage}></Route>
        </Switch>
        {/* <LandingPage /> */}
        {/* <ProductsPage /> */}
        {/* <ProductDetailPage /> */}
        {/* <AboutPage /> */}
        {/* <ContactPage /> */}
      </div>
    </Router>
  );
}

export default App;
