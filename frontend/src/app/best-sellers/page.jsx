import React from 'react'
import Link from 'next/link'
import ProtectedRoute from '@/Components/ProtectedRoute/ProtectedRoute'

const BestSellersPage = () => {
  const bestSellers = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: '🎧',
      rating: 4.8,
      reviews: 2547,
      sales: '2.5k sold',
      category: 'Electronics',
      badge: '#1 Best Seller',
      discount: '23% OFF'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: '⌚',
      rating: 4.9,
      reviews: 1834,
      sales: '1.8k sold',
      category: 'Electronics',
      badge: 'Hot',
      discount: '20% OFF'
    },
    {
      id: 3,
      name: 'Premium Coffee Maker',
      price: 149.99,
      originalPrice: 179.99,
      image: '☕',
      rating: 4.7,
      reviews: 956,
      sales: '950 sold',
      category: 'Home & Kitchen',
      badge: 'Trending',
      discount: '17% OFF'
    },
    {
      id: 4,
      name: 'Designer Backpack',
      price: 79.99,
      originalPrice: 99.99,
      image: '🎒',
      rating: 4.6,
      reviews: 723,
      sales: '720 sold',
      category: 'Fashion',
      badge: 'Popular',
      discount: '20% OFF'
    },
    {
      id: 5,
      name: 'Wireless Charging Pad',
      price: 34.99,
      originalPrice: 49.99,
      image: '🔌',
      rating: 4.5,
      reviews: 1245,
      sales: '1.2k sold',
      category: 'Electronics',
      badge: 'Value Pick',
      discount: '30% OFF'
    },
    {
      id: 6,
      name: 'Organic Skincare Set',
      price: 89.99,
      originalPrice: 119.99,
      image: '🧴',
      rating: 4.8,
      reviews: 892,
      sales: '890 sold',
      category: 'Beauty',
      badge: 'Customer Choice',
      discount: '25% OFF'
    }
  ]

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty']

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              🔥 Hot Deals
            </div>
            <h1 className="text-5xl font-bold mb-6">Best Sellers</h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Discover our most popular products loved by thousands of customers. 
              These top-rated items are flying off the shelves!
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-6">
            <div className="bg-gray-100 p-1 rounded-full">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-orange-500 text-white shadow-lg mr-1 last:mr-0"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                {/* Product Image & Badge */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-8xl">{product.image}</div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      {product.badge}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product.discount}
                    </span>
                  </div>

                  {/* Ranking */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-bold text-orange-600">#{index + 1}</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-16 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 mb-2 block">
                      ❤️
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 block">
                      👁️
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <span className="text-xs text-gray-500">{product.sales}</span>
                  </div>

                  <h3 className="font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-sm mr-2">
                      {'★'.repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-gray-600 text-sm">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-800">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                      Add to Cart
                    </button>
                    <Link 
                      href={`/item/${product.id}`}
                      className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-lg">
            Load More Best Sellers
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Products Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  )
}

export default BestSellersPage