import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <>
   
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4 ">
      <div>  <h2 className="text-[16px] font-bold text-gray-800 uppercase mb-4 ">COMPANY INFO</h2></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 mt-10">
          {/* Company Info */}
          <div>
          
            <ul className="space-y-3">
              <li><NavLink to="/about" className="text-gray-600 hover:text-gray-800 text-[16px]">About Us</NavLink></li>
              <li><NavLink to="/blog" className="text-gray-600 hover:text-gray-800 text-[16px]">Latest Posts</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-600 hover:text-gray-800 text-[16px]">Contact Us</NavLink></li>
              <li><NavLink to="/shop" className="text-gray-600 hover:text-gray-800 text-[16px]">Shop</NavLink></li>
            </ul>
          </div>

          {/* Tracking Column */}
          <div>
            <ul className="space-y-3 pt-8 md:pt-0">
              <li><NavLink to="/tracking" className="text-gray-600 hover:text-gray-800 text-[16px]">Tracking</NavLink></li>
              <li><NavLink to="/order-status" className="text-gray-600 hover:text-gray-800 text-[16px]">Order Status</NavLink></li>
              <li><NavLink to="/delivery" className="text-gray-600 hover:text-gray-800 text-[16px]">Delivery</NavLink></li>
              <li><NavLink to="/shipping" className="text-gray-600 hover:text-gray-800 text-[16px]">Shipping Info</NavLink></li>
              <li><NavLink to="/faq" className="text-gray-600 hover:text-gray-800 text-[16px]">FAQ</NavLink></li>
            </ul>
          </div>

          {/* Special Offers Column */}
          <div>
            <ul className="space-y-3 pt-8 md:pt-0">
              <li><NavLink to="/offers" className="text-gray-600 hover:text-gray-800 text-[16px]">Special Offers</NavLink></li>
              <li><NavLink to="/gift-cards" className="text-gray-600 hover:text-gray-800 text-[16px]">Gift Cards</NavLink></li>
              <li><NavLink to="/advertising" className="text-gray-600 hover:text-gray-800 text-[16px]">Advertising</NavLink></li>
              <li><NavLink to="/terms" className="text-gray-600 hover:text-gray-800 text-[16px]">Terms of Use</NavLink></li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div className="pt-8 md:pt-0">
            <div className="flex border-b-3 border-gray-700 pb-2 items-center">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="flex-grow bg-transparent outline-none text-[16px] text-gray-600"
              />
              <button className="text-gray-500 hover:text-gray-800">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 mb-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-[16px] text-gray-600">© 2020 NorthStar eCommerce</p>
            <p className="text-[16px] text-gray-600">
              <NavLink to="/privacy" className="hover:text-gray-800">Privacy Policy</NavLink>
              {' · '}
              <NavLink to="/terms" className="hover:text-gray-800">Terms & Conditions</NavLink>
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-4 ">
            <img src="./src/assets/payments.png" alt="Payment methods" className="h-6  " />
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;