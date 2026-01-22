'use client'
import { useState, useEffect } from 'react'

const SpecialOffers = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isMounted])

  const offers = [
    {
      id: 1,
      title: 'Flash Sale',
      discount: '50% OFF',
      description: 'Limited time offer on selected electronics',
      bgColor: 'from-red-500 to-pink-600',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'Buy 2 Get 1 Free',
      discount: 'BOGO',
      description: 'On all fashion items this week',
      bgColor: 'from-purple-500 to-indigo-600',
      icon: '🎁'
    },
    {
      id: 3,
      title: 'Free Shipping',
      discount: '$0 Delivery',
      description: 'On orders above $50',
      bgColor: 'from-green-500 to-teal-600',
      icon: '🚚'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Special Offers & Deals
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't miss out on these amazing limited-time offers
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-6">⏰ Flash Sale Ends In:</h3>
          <div className="flex justify-center space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                <div className="text-sm uppercase tracking-wide opacity-80">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {offers.map((offer) => (
            <div key={offer.id} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${offer.bgColor} rounded-2xl p-6 h-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                <div className="text-4xl mb-4">{offer.icon}</div>
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <div className="text-3xl font-black mb-3">{offer.discount}</div>
                <p className="text-white/90 mb-4">{offer.description}</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Deal Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center text-black">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              🔥 Mega Sale Weekend Special
            </h3>
            <p className="text-xl mb-6">
              Up to 70% off on thousands of products + Free shipping worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                Shop All Deals
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-colors">
                View Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers