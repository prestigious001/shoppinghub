import React from 'react'
import ProductSlide from '../Components/ProductSlide'
import Catigories from '../Components/Catigories'
import AllProductListing from '../Components/AllProductListing'

export default function Home() {
  return (
    <div>
        <ProductSlide/>
        <Catigories/>
        <AllProductListing/>
    </div>
  )
}
