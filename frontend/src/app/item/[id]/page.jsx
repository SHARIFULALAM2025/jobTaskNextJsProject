'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SingleProduct = ({ params }) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { id } = await params
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/single-product/${id}`
        )
        setProduct(res.data)
        
        // Fetch related products (mock for now)
        const relatedRes = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/product-all`
        )
        setRelatedProducts(relatedRes.data.slice(0, 4))
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  // Mock additional product data
  const productImages = [
    product.image || '/placeholder.png',
    product.image || '/placeholder.png',
    product.image || '/placeholder.png',
  ]

  const productSpecs = {
    'Brand': 'Premium Brand',
    'Model': product.name,
    'Weight': '1.2 kg',
    'Dimensions': '25 x 15 x 10 cm',
    'Material': 'High Quality Materials',
    'Warranty': '1 Year International Warranty',
    'Color': 'Multiple Colors Available',
    'SKU': `SKU-${product._id?.slice(-6) || '123456'}`
  }

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent product! Highly recommended.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Good quality, fast delivery. Very satisfied.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      name: 'Mike Johnson',
      rating: 5,
      comment: 'Perfect! Exactly what I was looking for.',
      date: '2024-01-08',
      verified: false
    }
  ]

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Product Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                    <span className="ml-2 text-gray-600">
                      ({averageRating.toFixed(1)}) • {reviews.length} reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-b py-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                    17% OFF
                  </span>
                </div>
                <p className="text-green-600 font-medium">✓ In Stock - Ready to Ship</p>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors transform hover:scale-105">
                    🛒 Add to Cart
                  </button>
                  <button className="flex-1 bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                    ⚡ Buy Now
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                    ❤️
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free shipping on orders over $50
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    30-day money-back guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 customer support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Secure payment processing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description || 'This is a high-quality product designed to meet your needs. Crafted with attention to detail and built to last, this item offers exceptional value and performance.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Premium quality materials</li>
                      <li>• Durable construction</li>
                      <li>• Easy to use and maintain</li>
                      <li>• Excellent value for money</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 1x {product.name}</li>
                      <li>• User manual</li>
                      <li>• Warranty card</li>
                      <li>• Original packaging</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(productSpecs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <span
                                    key={i}
                                    className={`text-sm ${
                                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                  >
                                    ⭐
                                  </span>
                                ))}
                              </div>
                              {review.verified && (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct._id}
                    href={`/item/${relatedProduct._id}`}
                    className="group"
                  >
                    <div className="bg-gray-100 aspect-square rounded-lg overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
                      <Image
                        src={relatedProduct.image || '/placeholder.png'}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-blue-600 font-bold">${relatedProduct.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleProduct