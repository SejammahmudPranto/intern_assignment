import React from 'react'
import Footer from '../../footer/Footer'
import HomeSection1 from '../../homeSection1/HomeSection1'
import HomeSection2 from '../../homeSection2/HomeSection2'
import HomeSection3 from '../../homeSection3/HomeSection3'
import HomeSection4 from '../../homeSection4/HomeSection4'
import HomeSection5 from '../../homeSection5/HomeSection5'
import HomeSection6 from '../../homeSection6/HomeSection6'
import HomeSection7 from '../../homeSection7/HomeSection7'
import HomeSection8 from '../../homeSection8/HomeSection8.js'
import HomeSection9 from '../../homeSection9/HomeSection9'

const Home = () => {
  return (
    <div>
      <HomeSection1/> {/*header */}
      <HomeSection2/> {/*Story */}
      <HomeSection3/> {/*Collaboration */}
      <HomeSection4/> {/*Success Stories */}
      <HomeSection5/> {/*Become Part */}
      <HomeSection6/> {/*Brands */}
      <HomeSection7/> {/*Join the hype */}
      <HomeSection8/> {/*Faqs */}
      <HomeSection9/> {/*Contact */}
      <Footer/>



    </div>
  )
}

export default Home