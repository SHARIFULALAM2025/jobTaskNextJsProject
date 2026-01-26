'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const ProtectedLink = ({ 
  href, 
  children, 
  className = '', 
  requireAuth = false,
  ...props 
}) => {
  const { data: session } = useSession()
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const auth = Cookies.get('auth')
    setIsAuth(!!auth)

    // Listen for auth changes
    const handleAuthChange = () => {
      const auth = Cookies.get('auth')
      setIsAuth(!!auth)
    }

    window.addEventListener('authStateChanged', handleAuthChange)

    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange)
    }
  }, [])

  const loggedIn = isAuth || session

  const handleClick = (e) => {
    if (requireAuth && !loggedIn) {
      e.preventDefault()
      // Redirect to login with the intended destination
      const loginUrl = `/login?redirect=${encodeURIComponent(href)}`
      router.push(loginUrl)
      return
    }
  }

  // If not requiring auth, just render normal link
  if (!requireAuth) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  // For protected links, handle click manually
  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ProtectedLink