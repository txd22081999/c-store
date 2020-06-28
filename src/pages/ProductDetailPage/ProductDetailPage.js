import React from 'react';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
