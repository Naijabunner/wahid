import React from 'react'
import ProductList from '../productList'
import SectionTitle from '../sectionTitle'

const PurchaseOnline = () => {
  return (
   <section className=' mt-16 md:mt-24 mb-2 max-w-[1153px] mx-auto'>
   <SectionTitle title='Purchase Online on Hurst'/>
    <ProductList/>
   </section>
  )
}

export default PurchaseOnline