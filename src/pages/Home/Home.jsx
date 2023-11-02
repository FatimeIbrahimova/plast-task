import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import ProductsReceived from './ProductsReceived/ProductsReceived'
import Info from './Info/Info'
import ContactUs from './ContactUs/ContactUs'
import OurProducts from './Corousel/Corousel'

const Home = () => {
  
  useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
  return (
   <>
    <HeroSection/>
    <ProductsReceived/>
    <OurProducts/>
    <Info/>
    <ContactUs/>
   </>
  )
}

export default Home