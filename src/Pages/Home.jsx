import React from 'react'
import ProductSlide from '../Components/ProductSlide'
import Catigories from '../Components/Catigories'
import AllProductListing from '../Components/AllProductListing'
import Sponsored from '../Components/Sponsored'
import Topselling from '../Components/Topselling'
import Offer from '../Components/Offers'
import GadgetListings from '../Components/Gadgetdeals'
import Provisiondeals from '../Components/Provisionsdeals'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
        <ProductSlide/>
        <Catigories/>
        <AllProductListing/>
        <Sponsored/>
        <Topselling/>
        <Offer/>
        <GadgetListings/>
        <Provisiondeals/>
        <Footer/>
    </div>
  )
}
