import React from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import ProductList from '../../components/ProductList/ProductList.js';
import FilterSlider from '../../components/FilterSlider/FilterSlider.js';

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
      {/* <FilterSlider /> */}
    </div>
  );
};

export default ProductsPage;
