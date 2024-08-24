import React from 'react'
import Nabar from './Component/Navbar/Nabar'
import LandingPage from './Component/Landing/LandingPage'
import Marquee from './Component/Home/Marquee'
import About from './Component/Home/About'
import Eyes from './Component/Home/Eyes'
import Feature from './Component/Home/Feature'
import Reviews from './Component/Home/Reviews'
import Cards from './Component/Home/Cards'
import Footer from './Component/Home/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import Banner from './Component/Home/Banner'
export default function App() {

const locomotiveScroll=new LocomotiveScroll();

  return (
    <div className='bg-[#E7E7E7]'>
      <Nabar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Reviews/>
      <Cards/>
      <Banner/>
      <Footer/>
    </div>
  )
}
