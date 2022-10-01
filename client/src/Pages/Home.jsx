import React from 'react'
import CraftedFor from "../Components/CraftedFor"
import OurPricing from "../Components/OurPricing"
import MidBanner from "../Components/MidBanner"
import Testimonial from "../Components/Testimonial"
import Partner from "../Components/Partner"
import GetInTouch from "../Components/GetInTouch"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import NewSlider from '../Components/NewSlider'

const Home = () => {
  return (
    <>
    <Navbar/>
        <CraftedFor/>
        <OurPricing/>
        <MidBanner/>
        <Testimonial/>
        <Partner/>
        <GetInTouch/>
        <Footer/>
    </>
  )
}

export default Home