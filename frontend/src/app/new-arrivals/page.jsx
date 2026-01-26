import React from 'react'
import Link from 'next/link'
import ProtectedRoute from '@/Components/ProtectedRoute/ProtectedRoute'

const NewArrivalsPage = () => {
  const newArrivals = [
    {
      id: 1,
      name: 'Ultra-Slim Laptop Stand',
      price: 49.99,
      image: '💻',
      isNew: true,
      colors: ['#000000', '#FFFFFF', '#C0C0C0'],
      category: 'Electronics',
      arrivalDate: '2024-01-20',
      features: ['Adjustable Height', 'Portable Design', 'Heat Dissipation']
    },
    {
      id: 2,
      name: 'Eco-Friendly Water Bottle',
      price: 24.99,
      image: '🍃',
      isNew: true,
      colors: ['#4169E1', '#32CD32', '#FF69B4'],
      category: 'Lifestyle',
      arrivalDate: '2024-01-18',
      features: ['BPA Free', 'Insulated', '24oz Capacity']
    },
    {
      id: 3,
      name: 'Minimalist Desk Organizer',
      price: 34.99,
      image: '📋',
      isNew: true,
      colors: ['#8B4513', '#000000', '#708090'],
      category: 'Office',
      arrivalDate: '2024-01-15',
      features: ['Bamboo Material', 'Multiple Compartments', 'Space Saving']
    },
    {
      id: 4,
      name: 'Smart LED Strip Lights',
      price: 39.99,
      image: '💡',
      isNew: true,
      colors: ['#FF0000', '#00FF00', '#0000FF'],
      category: 'Electronics',
      arrivalDate: '2024-01-12',
      features: ['Voice Control', 'App Control', '16M Colors']
    },
    {
      id: 5,
      name: 'Artisan Coffee Beans',
      price: 18.99,
      image: '☕',
      isNew: true,
      colors: ['#8B4513', '#654321', '#A0522D'],
      category: 'Food & Beverage',
      arrivalDate: '2024-01-10',
      features: ['Single Origin', 'Fair Trade', 'Fresh Roasted']
    },
    {
      id: 6,
      name: 'Wireless Earbuds Pro',
      price: 129.99,
      image: '🎵',
      isNew: true,
      colors: ['#000000', '#FFFFFF', '#FF6B6B'],
      category: 'Electronics',
      arrivalDate: '2024-01-08',
      features: ['Noise Cancelling', '30H Battery', 'Waterproof']
    }
  ]

  const timeAgo = (date) => {
    const days = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24))
    return days === 0 ? 'Today' : days === 1 ? '1 day ago' : `${days} days ago`
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              ✨ Fresh Arrivals
            </div>
            <h1 className="text-5xl font-bold mb-6">New Arrivals</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Be the first to discover our latest products! Fresh arrivals added daily 
              with the newest trends and innovations.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">View:</span>
              <button className="p-2 border border-gray-300 rounded-lg bg-emerald-50 text-emerald-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    {product.image}
                  </div>
                  
                  {/* New Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                      NEW
                    </span>
                  </div>

                  {/* Arrival Date */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                      {timeAgo(product.arrivalDate)}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex space-x-1">
                      {product.colors.map((color, index) => (
                        <div 
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-gray-200 shadow-sm"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      ${product.price}
                    </span>
                    <div className="flex space-x-2">
                      <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-medium text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-lg">
            Load More New Arrivals
          </button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-emerald-100 mb-8">
              Be the first to know about new arrivals, exclusive deals, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  )
}

export default NewArrivalsPage