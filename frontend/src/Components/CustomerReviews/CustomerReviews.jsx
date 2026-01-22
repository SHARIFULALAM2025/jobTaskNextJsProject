'use client'
import { useState, useEffect } from 'react'

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '👩‍💼',
      rating: 5,
      review: 'Amazing quality products and super fast delivery! I\'ve been shopping here for months and never disappointed.',
      product: 'Wireless Headphones',
      location: 'New York, USA',
      verified: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: '👨‍💻',
      rating: 5,
      review: 'Best customer service I\'ve ever experienced. They helped me choose the perfect laptop for my needs.',
      product: 'Gaming Laptop',
      location: 'California, USA',
      verified: true
    },
    {
      id: 3,
      name: 'Emma Wilson',
      avatar: '👩‍🎨',
      rating: 4,
      review: 'Great variety of products and competitive prices. The website is easy to navigate and checkout is smooth.',
      product: 'Art Supplies Set',
      location: 'London, UK',
      verified: true
    },
    {
      id: 4,
      name: 'David Rodriguez',
      avatar: '👨‍🏫',
      rating: 5,
      review: 'Excellent quality and packaging. My order arrived exactly as described and well protected.',
      product: 'Smart Watch',
      location: 'Madrid, Spain',
      verified: true
    }
  ]

  const stats = [
    { label: 'Happy Customers', value: '50K+', icon: '😊' },
    { label: 'Products Sold', value: '100K+', icon: '📦' },
    { label: 'Average Rating', value: '4.8/5', icon: '⭐' },
    { label: 'Countries Served', value: '25+', icon: '🌍' }
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length, isMounted])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                "{reviews[currentReview].review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-4xl">{reviews[currentReview].avatar}</div>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-800">{reviews[currentReview].name}</h4>
                    {reviews[currentReview].verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{reviews[currentReview].location}</p>
                  <p className="text-blue-600 text-sm">Purchased: {reviews[currentReview].product}</p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{review.avatar}</div>
                <div>
                  <h5 className="font-semibold text-gray-800">{review.name}</h5>
                  <div className="flex text-yellow-400 text-sm">
                    {'⭐'.repeat(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.review.slice(0, 120)}...
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
            Read All Reviews
          </button>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews