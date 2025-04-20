import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "src/assets/unsplash_KjRkxQ2NNXA.png",
      name: "Plain White Shirt",
      price: 29.00
    },
    {
      id: 2,
      image: "src/assets/Rectangle 1.png",
      name: "Denim Jacket",
      price: 69.00
    },
    {
      id: 3,
      image: "src/assets/Rectangle 1 (1).png",
      name: "Black Polo Shirt",
      price: 49.00
    },
    {
      id: 4,
      image: "src/assets/Rectangle 1 (2).png",
      name: "Blue Sweatshirt",
      price: 79.00
    },
    {
      id: 5,
      image: "src/assets/Rectangle 1 (3).png",
      name: "Blue Plain Shirt",
      price: 49.00
    },
    {
      id: 6,
      image: "src/assets/Rectangle 1 (4).png",
      name: "Dark Blue Shirt",
      price: 89.00
    },
    {
      id: 7,
      image: "src/assets/Rectangle 1 (5).png",
      name: "Outcast T Shirt",
      price: 19.00
    },
    {
      id: 8,
      image: "src/assets/Rectangle 1 (6).png",
      name: "Polo Plain Shirt",
      price: 29.00
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card group cursor-pointer">
            <Link to={`/product/${product.id}`} className="block">
              <div className="overflow-hidden mb-3">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-800">{product.name}</p>
                <p className="text-blue-600 mt-1">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="pb-10 py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free Shipping */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img src="src/assets/icon.png" alt="Free Shipping"  className="w-8 h-8 text-blue-600 object-contain" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase text-gray-800 mb-1">FREE SHIPPING</p>
              <p className="text-sm text-gray-600">Enjoy free shipping on all orders above $100</p>
            </div>
          </div>

          {/* Support 24/7 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img src="src/assets/icon (1).png" alt="Support" className="w-8 h-8 text-blue-600 object-contain" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase text-gray-800 mb-1">SUPPORT 24/7</p>
              <p className="text-sm text-gray-600">Our support team is there to help you for queries</p>
            </div>
          </div>

          {/* 30 Days Return */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img src="src/assets/icon (2).png" alt="Return Policy" className="w-8 h-8 text-blue-600 object-contain" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase text-gray-800 mb-1">30 DAYS RETURN</p>
              <p className="text-sm text-gray-600">Simply return it within 30 days for an exchange.</p>
            </div>
          </div>

          {/* Payment Secure */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img src="src/assets/icon (3).png" alt="Secure Payment" className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase text-gray-800 mb-1">100% PAYMENT SECURE</p>
              <p className="text-sm text-gray-600">Our payments are secured with 256 bit encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Peace of Mind Banner */}
        <div className="bg-black text-white flex flex-col items-center justify-center text-center py-16 px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">PEACE OF MIND</h2>
          <p className="text-sm md:text-base max-w-md mb-8">
            A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.
          </p>
          <div>
            <Link 
              to="/shop" 
              className="inline-block bg-white text-black font-medium px-8 py-3 hover:bg-gray-200 transition-colors"
            >
              BUY NOW
            </Link>
          </div>
        </div>

        {/* Buy 2 Get 1 Free Banner */}
        <div className="bg-black text-white flex flex-col items-center justify-center text-center py-16 px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">BUY 2 GET 1 FREE</h2>
          <p className="text-sm md:text-base max-w-md mb-8">
            End of season sale. Buy any 2 items of your choice and get 1 free.
          </p>
          <div>
            <Link 
              to="/sale" 
              className="inline-block bg-white text-black font-medium px-8 py-3 hover:bg-gray-200 transition-colors"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </div>

      
    </div>
  );
};

export default ProductGrid;
