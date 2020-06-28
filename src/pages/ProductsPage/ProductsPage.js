import React from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import ProductList from '../../components/ProductList/ProductList.js';
import FilterSlider from '../../components/FilterSlider/FilterSlider.js';
import Footer from '../../components/Footer/Footer.js';

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
      {/* <FilterSlider /> */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
