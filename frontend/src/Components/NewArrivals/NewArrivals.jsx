'use client'
import { useState } from 'react'

const NewArrivals = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const newProducts = [
    {
      id: 1,
      name: 'Premium Bluetooth Speaker',
      price: 89.99,
      image: '/speaker.jpg',
      isNew: true,
      colors: ['#000000', '#FFFFFF', '#FF6B6B'],
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Minimalist Backpack',
      price: 59.99,
      image: '/backpack.jpg',
      isNew: true,
      colors: ['#8B4513', '#000000', '#708090'],
      category: 'Fashion'
    },
    {
      id: 3,
      name: 'Smart Home Hub',
      price: 129.99,
      image: '/smart-hub.jpg',
      isNew: true,
      colors: ['#FFFFFF', '#000000'],
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Organic Skincare Set',
      price: 45.99,
      image: '/skincare.jpg',
      isNew: true,
      colors: ['#F5F5DC', '#FFB6C1', '#98FB98'],
      category: 'Beauty'
    },
    {
      id: 5,
      name: 'Wireless Charging Pad',
      price: 34.99,
      image: '/charger.jpg',
      isNew: true,
      colors: ['#000000', '#FFFFFF'],
      category: 'Electronics'
    },
    {
      id: 6,
      name: 'Eco-Friendly Water Bottle',
      price: 24.99,
      image: '/bottle.jpg',
      isNew: true,
      colors: ['#4169E1', '#32CD32', '#FF69B4'],
      category: 'Lifestyle'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Just Arrived
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            New Arrivals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the latest products that just landed in our store
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🆕
                  </div>
                  
                  {/* New Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                      NEW
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                      👁️
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                      ❤️
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <div className="flex space-x-1">
                      {product.colors.map((color, index) => (
                        <div 
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      ${product.price}
                    </span>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-lg">
            View All New Arrivals
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals