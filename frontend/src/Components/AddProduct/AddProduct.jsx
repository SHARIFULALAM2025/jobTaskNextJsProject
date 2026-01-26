'use client'

import React, { useState } from 'react'
import { uploadImage } from '../ReusableFunction/Upload'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Toast, { useToast } from '../Toast/Toast'

const AddProduct = () => {
  const router = useRouter()
  const { toast, showToast, hideToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors },
    watch 
  } = useForm()

  const watchImage = watch('image')

  // Handle image preview
  React.useEffect(() => {
    if (watchImage && watchImage[0]) {
      const file = watchImage[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }, [watchImage])

  const handelAddProduct = async (data) => {
    setIsLoading(true)
    try {
      const { name, price, description, image, category, brand } = data
      const productImage = image[0]
      
      // Show loading toast
      showToast('Uploading product...', 'info')
      
      const uploadProductImage = await uploadImage(productImage)
      const allData = {
        name,
        price,
        description,
        image: uploadProductImage,
        category: category || 'General',
        brand: brand || 'Generic',
        createdAt: new Date().toISOString(),
        inStock: true
      }
      
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/all_product`,
        allData
      )
      
      if (res.data.insertedId) {
        showToast('Product uploaded successfully! 🎉', 'success')
        reset()
        setImagePreview(null)
        
        // Redirect after a short delay to show the success message
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        showToast('Failed to upload product. Please try again.', 'error')
      }
    } catch (error) {
      console.error('Error uploading product:', error)
      showToast('An error occurred while uploading. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
          <p className="text-gray-600">Fill in the details below to add a new product to your store</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit(handelAddProduct)} className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  {...register('name', { 
                    required: 'Product name is required',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' }
                  })}
                  className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Price and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('price', { 
                      required: 'Price is required',
                      min: { value: 0.01, message: 'Price must be greater than 0' },
                      valueAsNumber: true 
                    })}
                    className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                      errors.price ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0.00"
                  />
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    {...register('category')}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Sports">Sports</option>
                    <option value="Books">Books</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Toys">Toys</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Brand
                </label>
                <input
                  type="text"
                  {...register('brand')}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter brand name"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  {...register('description', { 
                    required: 'Description is required',
                    minLength: { value: 10, message: 'Description must be at least 10 characters' }
                  })}
                  rows="4"
                  className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe your product in detail..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Image *
                </label>
                <div className="space-y-4">
                  <input
                    type="file"
                    accept="image/*"
                    {...register('image', { 
                      required: 'Product image is required' 
                    })}
                    className={`w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer file:cursor-pointer file:font-medium ${
                      errors.image ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.image && (
                    <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
                  )}
                  
                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                      <div className="relative w-32 h-32 border-2 border-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-200 transform ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Uploading...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span>Upload Product</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Make sure all information is accurate before uploading your product.</p>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  )
}

export default AddProduct
