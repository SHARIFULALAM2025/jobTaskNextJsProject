'use client'

import React from 'react'
import { uploadImage } from '../ReusableFunction/Upload'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
  const router = useRouter()
  const { register, handleSubmit, reset } = useForm()
  const handelAddProduct = async (data) => {
    const { name, price, description, image } = data
    const productImage = image[0]
    const uploadProductImage = await uploadImage(productImage)
    const allData = {
      name,
      price,
      description,
      image: uploadProductImage,
    }
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/all_product`,
      allData
    )
    if (res.data.insertedId) {
      alert('data insert')
      router.push('/product')
      reset()
    }
    console.log(data)
  }
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit(handelAddProduct)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Price Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            {...register('price', { required: true,valueAsNumber:true })}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register('description', { required: true })}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Image Upload Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            {...register('image', { required: true })}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Upload Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
