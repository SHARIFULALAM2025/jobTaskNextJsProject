import React from 'react'
import Link from 'next/link'
import ProtectedRoute from '@/Components/ProtectedRoute/ProtectedRoute'

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Latest gadgets, smartphones, laptops, and tech accessories',
      itemCount: '250+ Items',
      image: '📱',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Trendy clothing, shoes, accessories for men and women',
      itemCount: '180+ Items',
      image: '👗',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    {
      id: 3,
      name: 'Home & Garden',
      description: 'Furniture, decor, kitchen essentials, and garden tools',
      itemCount: '120+ Items',
      image: '🏠',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      id: 4,
      name: 'Sports & Fitness',
      description: 'Exercise equipment, sportswear, and outdoor gear',
      itemCount: '90+ Items',
      image: '⚽',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      id: 5,
      name: 'Books & Media',
      description: 'Books, magazines, movies, music, and educational content',
      itemCount: '200+ Items',
      image: '📚',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    },
    {
      id: 6,
      name: 'Beauty & Health',
      description: 'Skincare, makeup, wellness products, and health supplements',
      itemCount: '150+ Items',
      image: '💄',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      id: 7,
      name: 'Toys & Games',
      description: 'Fun toys, board games, puzzles for kids and adults',
      itemCount: '80+ Items',
      image: '🎮',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      id: 8,
      name: 'Automotive',
      description: 'Car accessories, tools, parts, and maintenance products',
      itemCount: '60+ Items',
      image: '🚗',
      color: 'from-gray-500 to-slate-600',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700'
    }
  ]

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Shop by Category</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover thousands of products organized into convenient categories. 
              Find exactly what you're looking for with our curated collections.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                {/* Category Header */}
                <div className={`${category.bgColor} p-6 text-center`}>
                  <div className="text-6xl mb-4">{category.image}</div>
                  <h3 className={`text-xl font-bold ${category.textColor} mb-2`}>
                    {category.name}
                  </h3>
                  <span className={`${category.textColor} text-sm font-medium bg-white px-3 py-1 rounded-full`}>
                    {category.itemCount}
                  </span>
                </div>

                {/* Category Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full group-hover:shadow-lg transition-all duration-300`}>
                    <span>Browse Category</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Shop by Category?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our organized categories make it easy to find exactly what you need, 
              discover new products, and compare similar items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Navigation</h3>
              <p className="text-gray-600">Find products quickly with our intuitive category system</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Curated Selection</h3>
              <p className="text-gray-600">Each category features hand-picked, quality products</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Filtering</h3>
              <p className="text-gray-600">Advanced filters help you narrow down your choices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  )
}

export default CategoriesPage