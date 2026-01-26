'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProtectedButton from '../ProtectedButton/ProtectedButton'

const CardProduct = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/product-all`
        )
        setProducts(res.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading)
    return (
      <p className="text-center mt-10 text-xl font-bold text-blue-600">
        Loading Products...
      </p>
    )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {products.map((item) => (
        <div
          key={item._id}
          className="border p-4 rounded-xl shadow-lg bg-white group hover:scale-105 transition duration-300"
        >
          <div className="relative h-56 w-full mb-4">
            <Image
              src={item.image || '/placeholder.png'}
              alt={item.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600 text-sm my-2">
            {item.description?.slice(0, 100)}...
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold text-blue-600">
              ${item.price}
            </span>
            <ProtectedButton 
              href={`/item/${item._id}`}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Details
            </ProtectedButton>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardProduct
