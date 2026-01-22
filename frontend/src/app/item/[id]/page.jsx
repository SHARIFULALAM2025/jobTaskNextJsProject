import axios from 'axios'
import React from 'react'
import Image from 'next/image'

const SingleProduct = async ({ params }) => {
  const { id } = await params

  // ব্যাকএন্ড থেকে ডাটা ফেচ করা
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/single-product/${id}`
  )
  const product = res.data

  // যদি প্রোডাক্ট না পাওয়া যায়
  if (!product) {
    return <div className="text-center mt-20">Product not found!</div>
  }

  return (
    <div className="max-w-6xl mx-auto p-10 mt-10">
      <div className="flex flex-col md:flex-row gap-10 bg-white shadow-xl p-8 rounded-2xl">
        {/* ইমেজ সেকশন */}
        <div className="md:w-1/2 relative h-75">
          <Image
            src={product.image?.trim() || '/placeholder.png'}
            alt={product.name}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        {/* ইনফরমেশন সেকশন */}
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600">
            ${product.price}
          </p>

          <div className="border-t border-b py-5">
            <h3 className="font-bold text-lg mb-2">Description:</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
