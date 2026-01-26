import CardProduct from '@/Components/Card/CardProduct'
import React from 'react'

const ItemsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-gray-600 text-lg">Discover our complete collection of amazing products</p>
        </div>
        <CardProduct />
      </div>
    </div>
  )
}

export default ItemsPage