'use client'
import { useState, useEffect } from 'react'

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500'

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white hover:text-gray-200">
          ×
        </button>
      </div>
    </div>
  )
}

export const useToast = () => {
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  })

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type })
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  return { toast, showToast, hideToast }
}

export default Toast