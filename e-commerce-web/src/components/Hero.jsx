import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Hero Banner with Background Image */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        <img 
          src="./src/assets/img_1.png" 
          alt="hero-img" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Text and Button */}
        <div className="absolute top-1/3 right-8 md:right-16 lg:right-24 text-right">
          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            Stylist picks beat<br />the heat
          </h3>
          <div className="mt-6">
            <Link 
              to="/shop" 
              className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase text-sm tracking-wider"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="py-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Discover NEW Arrivals</h3>
        <h6 className="mt-2 text-gray-600">Recently added shirts!</h6>
      </div>
    </div>


  
  );
};

export default HeroSection;