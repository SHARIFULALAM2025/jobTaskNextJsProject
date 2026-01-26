
'use client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

const Login = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  // Get redirect parameters
  const redirectTo = searchParams.get('redirect') || '/'
  const fromPage = searchParams.get('from') || ''

  const handelLogin = async (data) => {
    setIsLoading(true)
    setError('')

    if (
      data.email === 'sharifullinkdin2025@gmail.com' &&
      data.password === 'abc123'
    ) {
      // store auth in cookie
      Cookies.set('auth', 'true', { expires: 1 })

      // Dispatch custom event to notify navbar of auth change
      window.dispatchEvent(new Event('authStateChanged'))

      // Redirect to the intended page
      if (redirectTo && redirectTo !== '/') {
        router.push(redirectTo)
      } else {
        router.push('/')
      }
    } else {
      setError('Invalid email or password')
    }

    setIsLoading(false)
  }

  const handleGoogleSignIn = () => {
    const callbackUrl = redirectTo && redirectTo !== '/' ? redirectTo : '/'
    signIn('google', { callbackUrl })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-1">
            {fromPage ? `Login to access ${fromPage === '/item' ? 'Items' : 'the page'}` : 'Login to continue to your account'}
          </p>
       
        </div>

        {error && (
          <div className="mb-4 p-3 text-sm bg-red-50 border border-red-300 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(handelLogin)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
              disabled={isLoading}
              suppressHydrationWarning={true}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register('password', { required: true })}
              disabled={isLoading}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-lg text-white font-semibold
            bg-green-600 hover:bg-green-700 transition disabled:opacity-60"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2.5 rounded-lg text-white font-semibold
          bg-gray-400 mt-3 flex items-center gap-3 justify-center hover:bg-gray-500 transition"
        >
          <FcGoogle />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don&apos;t have an account?{' '}
          <Link 
            href={`/register${redirectTo && redirectTo !== '/' ? `?redirect=${encodeURIComponent(redirectTo)}` : ''}`} 
            className="text-green-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>

        {/* Demo Credentials */}
        <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-xs text-gray-600 font-medium mb-1">Demo Credentials:</p>
          <p className="text-xs text-gray-500">Email: sharifullinkdin2025@gmail.com</p>
          <p className="text-xs text-gray-500">Password: abc123</p>
        </div>
      </div>
    </div>
  )
}

export default Login

