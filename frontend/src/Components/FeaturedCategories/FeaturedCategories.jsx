'use client'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: '/electronics.jpg',
      itemCount: '250+ Items',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      name: 'Fashion',
      image: '/fashion.jpg',
      itemCount: '180+ Items',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 3,
      name: 'Home & Garden',
      image: '/home-garden.jpg',
      itemCount: '120+ Items',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      name: 'Sports',
      image: '/sports.jpg',
      itemCount: '90+ Items',
      color: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our wide range of products across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.name.toLowerCase()}`} key={category.id}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
                  <div className="relative p-8 text-center text-white">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">🛍️</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.itemCount}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories