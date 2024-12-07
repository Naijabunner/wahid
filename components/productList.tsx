import React from 'react'
import ProductCard from './productCard'

const ProductList = () => {
  return (
    <div className="overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-10 px-3">
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
 </div>
  )
}

export default ProductList