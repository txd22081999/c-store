import React from 'react'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const ProductDetailPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <ProductDetail {...props} />
      <Footer {...props} />
    </div>
  )
}

export default ProductDetailPage
