'use client'
import Image from 'next/image'
import { useState } from 'react'

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState('all')
  
  const bestSellers = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: '/headphones.jpg',
      rating: 4.8,
      sales: '2.5k sold',
      category: 'electronics',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: '/smartwatch.jpg',
      rating: 4.9,
      sales: '1.8k sold',
      category: 'electronics',
      badge: 'Hot'
    },
    {
      id: 3,
      name: 'Designer Jacket',
      price: 79.99,
      originalPrice: 99.99,
      image: '/jacket.jpg',
      rating: 4.7,
      sales: '950 sold',
      category: 'fashion',
      badge: 'Trending'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: 149.99,
      originalPrice: 179.99,
      image: '/coffee-maker.jpg',
      rating: 4.6,
      sales: '720 sold',
      category: 'home',
      badge: 'Popular'
    }
  ]

  const tabs = [
    { id: 'all', label: 'All Products' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'home', label: 'Home & Kitchen' }
  ]

  const filteredProducts = activeTab === 'all' 
    ? bestSellers 
    : bestSellers.filter(product => product.category === activeTab)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Best Sellers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our most popular products loved by thousands of customers
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <span className="text-4xl">📱</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                      ❤️
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      ({product.rating}) • {product.sales}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-800">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers