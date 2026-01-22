'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postUser, uploadImage } from '../ReusableFunction/Upload'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const handelSign = async (data) => {
    setIsLoading(true)
    setError('')

    try {
      const { name, email, password, image } = data
      const imageUrl = image[0]
      const myImage = await uploadImage(imageUrl)
      console.log(data, myImage)
      const result = await postUser({ name, email, password, myImage })
      await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (result.acknowledged) {
        router.push('/')
      } else {
        setError('Registration failed. Please try again.')
      }
    } catch (err) {
      setError('An error occurred during registration. Please try again.')
      console.error('Registration error:', err)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 mt-1">Join us and start your journey</p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 text-sm bg-red-50 border border-red-300 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(handelSign)} className="space-y-4">
          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              {...register('image', { required: true })}
              disabled={isLoading}
              className="w-full text-sm file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-green-100 file:text-green-700
              hover:file:bg-green-200 transition"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: true })}
              disabled={isLoading}
              className="w-full px-4 py-2 border rounded-lg
              focus:ring-2 focus:ring-green-400 focus:outline-none
              disabled:bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
              disabled={isLoading}
              className="w-full px-4 py-2 border rounded-lg
              focus:ring-2 focus:ring-green-400 focus:outline-none
              disabled:bg-gray-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a strong password"
              {...register('password', { required: true })}
              disabled={isLoading}
              className="w-full px-4 py-2 border rounded-lg
              focus:ring-2 focus:ring-green-400 focus:outline-none
              disabled:bg-gray-100"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-lg text-white font-semibold
            bg-green-600 hover:bg-green-700
            transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <button
          disabled={isLoading}
          className="w-full py-2.5 rounded-lg text-white font-semibold
            bg-green-600 hover:bg-green-700 mt-3 flex items-center gap-3 justify-center
            transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <FcGoogle></FcGoogle>
          {isLoading ? 'Creating Account...' : 'sign up with google'}
        </button>
        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
