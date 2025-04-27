import React from 'react';
import { Link } from 'react-router-dom'; 
import CardImage from '../assets/Rectangle 1 (7).png'; 
import CardImage2 from '../assets/Rectangle 1 (8).png'; 
import CardImage3 from '../assets/Rectangle 1 (9).png'; 
import CardImage4 from '../assets/Rectangle 1 (11).png'; 

const TopSeller = () => {
  const topProducts = [
    {
      id: 1,
      image: CardImage,
      name: "Gray Polo Shirt",
      price: 49.00
    },
    {
      id: 2,
      image: CardImage2,
      name: "Red Shirt",
      price: 69.00
    },
    {
      id: 3,
      image: CardImage3,
      name: "Polo White Shirt",
      price: 29.00
    },
    {
      id: 4,
      image: CardImage4,
      name: "Pink Casual Shirt",
      price: 39.00
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Top Sellers</h2>
          <p className="text-gray-600">Browse our top-selling products</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topProducts.map((product) => (
            <div key={product.id} className="text-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover mb-4"
              />
              <p className="font-medium text-gray-800">{product.name}</p>
              <p className="text-blue-600 mt-1">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Shop Now Button */}
        <div className="text-center">
          <Link 
            to="/shop" 
            className="inline-block bg-blue-800 text-white font-medium px-12 py-3 hover:bg-blue-900 transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;