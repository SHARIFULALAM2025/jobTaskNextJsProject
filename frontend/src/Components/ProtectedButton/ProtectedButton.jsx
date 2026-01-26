'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const ProtectedButton = ({ 
  children, 
  onClick, 
  href, 
  className = '', 
  redirectTo = '/login',
  ...props 
}) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = Cookies.get('auth')
    setIsAuth(!!auth)
    setLoading(false)

    // Listen for auth changes
    const handleAuthChange = () => {
      const auth = Cookies.get('auth')
      setIsAuth(!!auth)
      setLoading(false)
    }

    // Listen for custom auth events
    window.addEventListener('authStateChanged', handleAuthChange)

    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange)
    }
  }, [])

  const loggedIn = isAuth || session

  const handleClick = (e) => {
    if (!loggedIn) {
      e.preventDefault()
      // Redirect to login with the intended destination
      const loginUrl = `${redirectTo}?redirect=${encodeURIComponent(href || window.location.pathname)}`
      router.push(loginUrl)
      return
    }
    
    if (onClick) {
      onClick(e)
    } else if (href) {
      router.push(href)
    }
  }

  if (loading) {
    return (
      <button className={className} disabled {...props}>
        {children}
      </button>
    )
  }

  return (
    <button 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default ProtectedButton