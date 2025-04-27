import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Testimonials from './Testimonials'
import Footer from './Footer'
import AboutImage from '../assets/Hero.png'
import AboutImage2 from '../assets/About-img (3).png'
import AboutImage3 from '../assets/About-img (2).png'

const About = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className="w-full">
      {/* Hero Banner with Text Overlay - Full width, no padding */}
      <div className="relative w-full h-[200px] md:h-[250px]">
        <img 
          src={AboutImage} 
          alt="About Northstar" 
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute bottom-6 left-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold">ABOUT NORTHSTAR</h2>
        </div> */}
      </div>

      {/* Two Column Image Section with BUY NOW Buttons - With container padding */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="relative h-[350px] md:h-[400px]">
            <img 
              src={AboutImage2}
              alt="Women's Collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-0 w-full flex justify-center">
              <Link 
                to="/shop/women" 
                className="bg-white text-gray-800 px-8 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                BUY NOW
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] md:h-[400px]">
            <img 
              src={AboutImage3}
              alt="Men's Collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-0 w-full flex justify-center">
              <Link 
                to="/shop/men" 
                className="bg-white text-gray-800 px-8 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Testimonials />
    <Footer />
      </>
  )
}

export default About
