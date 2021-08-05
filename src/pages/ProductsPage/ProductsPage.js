import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js'
import ProductList from '../../components/ProductList/ProductList.js'
import FilterSlider from '../../components/FilterSlider/FilterSlider.js'
import Footer from '../../components/Footer/Footer.js'

const ProductsPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <ProductList {...props} />
      {/* <FilterSlider /> */}
      <Footer {...props} />
    </div>
  )
}

export default ProductsPage
