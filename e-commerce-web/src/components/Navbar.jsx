import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import UserImage from '../assets/user 1.png'; 
import CartImage from '../assets/shopping-bag 1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <h2 className="text-gray-800">NorthStar</h2>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:block">
          <ul className="flex space-x-10">
          <li> 
            <NavLink to="/" className="text-blue-600 font-medium px-4 py-2">HOME</NavLink>
            
            </li>
            <li>


                 <NavLink to="/about" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">ABOUT</NavLink>
                 </li>
            <li>
                 <NavLink to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">CONTACT US</NavLink></li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            <img src={UserImage} alt="user" className="w-6 h-6" />
            <div className="relative">
              <img src={CartImage} alt="cart" className="w-6 h-6" />
             
            
            </div>
          </div>
          {/* Mobile Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="./src/assets/menu 1.png" alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pt-2 border-t">
          <ul className="flex flex-col space-y-2">
            <li> <NavLink to="/" className="text-blue-600 font-medium px-4 py-2">HOME</NavLink></li>
            <li> <NavLink to="/about" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">ABOUT</NavLink></li>
            <li> <NavLink to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">CONTACT US</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;