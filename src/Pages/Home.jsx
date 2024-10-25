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
import Fragance from '../Components/Fragance'
import Newsletter from '../Components/Newsletter'
// import Progress from '../Components/Progress'

export default function Home() {
  return (
    <div>
        <ProductSlide/>
        {/* <Progress/> */}
        <Catigories/>
        <AllProductListing/>
        <Sponsored/>
        <Topselling/>
        <Offer/>
        <GadgetListings/>
        <Provisiondeals/>
        <Fragance/>
        <Newsletter/>
        <Footer/>

    </div>
  )
}
