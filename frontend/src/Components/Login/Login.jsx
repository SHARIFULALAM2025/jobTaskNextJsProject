
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

const Login = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const handelLogin = async (data) => {
    setIsLoading(true)
    setError('')

    if (
      data.email === 'sharifullinkdin2025@gmail.com' &&
      data.password === 'abc123'
    ) {
      // store auth in cookie
      Cookies.set('auth', 'true', { expires: 1 })

      router.push('/item')
    } else {
      setError('Invalid email or password')
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-1">
            Login to continue to your account
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
          onClick={() => signIn('google', { callbackUrl: '/' })}

          className="w-full py-2.5 rounded-lg text-white font-semibold
          bg-gray-400 mt-3 flex items-center gap-3 justify-center"
        >
          <FcGoogle />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-green-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

/* // try {
    //   const res = await signIn('credentials', {
    //     email: data.email,
    //     password: data.password,
    //     redirect: false,
    //   })

    //   if (res.error) {
    //     setError('Invalid email or password. Please try again.')
    //   } else {
    //     console.log('login successfully')
    //     router.push('/')
    //   }
    // } catch (err) {
    //   setError('An error occurred during login. Please try again.')
    // } finally {
    //   setIsLoading(false)
    // } */