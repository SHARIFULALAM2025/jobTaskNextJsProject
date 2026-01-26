'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check auth immediately on mount
    const auth = Cookies.get('auth')
    setIsAuth(!!auth)
    setIsInitialized(true)

    // If not authenticated, redirect immediately
    if (!auth && !session && status !== 'loading') {
      const currentPath = window.location.pathname
      const loginUrl = `/login?redirect=${encodeURIComponent(currentPath)}`
      router.push(loginUrl)
      return
    }

    // Listen for auth changes
    const handleAuthChange = () => {
      const auth = Cookies.get('auth')
      setIsAuth(!!auth)
    }

    window.addEventListener('authStateChanged', handleAuthChange)

    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange)
    }
  }, [session, status, router])

  // Redirect effect for when auth state changes
  useEffect(() => {
    if (isInitialized && !isAuth && !session && status !== 'loading') {
      const currentPath = window.location.pathname
      const loginUrl = `/login?redirect=${encodeURIComponent(currentPath)}`
      router.push(loginUrl)
    }
  }, [isAuth, session, status, router, isInitialized])

  const loggedIn = isAuth || session

  // Show minimal loading only for NextAuth session loading
  if (status === 'loading' && !isAuth) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  // If not logged in, don't render anything (redirect is happening)
  if (!loggedIn) {
    return null
  }

  return children
}

export default ProtectedRoute