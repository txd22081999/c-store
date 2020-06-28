import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductList from './pages/ProductsPage/ProductsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <div className='App'>
      {/* <LandingPage /> */}
      {/* <ProductsPage /> */}
      <ProductDetailPage />
    </div>
  );
}

export default App;
