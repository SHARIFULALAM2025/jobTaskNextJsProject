'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ProtectedLink from '@/Components/ProtectedLink/ProtectedLink'

const navData = [
  { Name: 'Home', path: '/', protected: false },
  { Name: 'Items', path: '/item', protected: false },
  { Name: 'Categories', path: '/categories', protected: true },
  { Name: 'Best Sellers', path: '/best-sellers', protected: true },
  { Name: 'New Arrivals', path: '/new-arrivals', protected: true },
  { Name: 'Contact', path: '/contact', protected: true },
  { Name: 'Add Product', path: '/product', protected: true },
]

const Navbar = () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isAuth, setIsAuth] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3)

  useEffect(() => {
    const auth = Cookies.get('auth')
    setIsAuth(!!auth)

    // Listen for auth changes
    const handleAuthChange = () => {
      const auth = Cookies.get('auth')
      setIsAuth(!!auth)
    }

    // Listen for custom auth events
    window.addEventListener('authStateChanged', handleAuthChange)
    
    // Also listen for storage changes (in case cookies are modified)
    const interval = setInterval(() => {
      const auth = Cookies.get('auth')
      if (!!auth !== isAuth) {
        setIsAuth(!!auth)
      }
    }, 1000)

    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange)
      clearInterval(interval)
    }
  }, [isAuth])

  const handleLogout = () => {
    Cookies.remove('auth')
    setIsAuth(false)
    
    // Dispatch custom event to notify other components of auth change
    window.dispatchEvent(new Event('authStateChanged'))
    
    if (session) signOut({ callbackUrl: '/' })
    else router.push('/login')
  }

  const loggedIn = isAuth || session

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Always visible */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-1.5 rounded-lg">
              <span className="text-white font-bold text-lg">🛍️</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              E-Shopping
            </h1>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden xl:flex items-center space-x-8">
            {navData.map((item, index) => (
              <ProtectedLink 
                key={index}
                href={item.path}
                requireAuth={item.protected}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.Name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </ProtectedLink>
            ))}
          </div>

          {/* Right Side Icons and User - Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Icon - Hidden on small screens */}
            <button className="hidden sm:block p-2 text-gray-600 hover:text-green-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Icon - Always visible */}
            <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Section - Responsive */}
            <div className="flex items-center space-x-2">
              {/* User Info - Hidden on mobile */}
              {session && (
                <div className="hidden lg:flex items-center space-x-2">
                  <Image
                    src={session?.user?.image || '/default-avatar.png'}
                    alt="User Avatar"
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="text-sm max-w-[120px]">
                    <p className="font-medium text-gray-800 truncate">{session?.user?.name}</p>
                  </div>
                </div>
              )}
              
              {/* Login/Logout Button - Responsive */}
              {loggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg border border-red-500 text-red-600 hover:bg-red-500 hover:text-white transition-all duration-200"
                >
                  <span className="hidden sm:inline">Logout</span>
                  <span className="sm:hidden">Out</span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button - Only visible on mobile/tablet */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide down animation */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 border-t border-gray-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-1">
            {/* Mobile Navigation Links */}
            {navData.map((item, index) => (
              <ProtectedLink 
                key={index}
                href={item.path}
                requireAuth={item.protected}
                className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.Name}
              </ProtectedLink>
            ))}
            
            {/* Mobile Search */}
            <div className="px-4 py-2 sm:hidden">
              <button className="flex items-center space-x-2 w-full px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-medium">Search</span>
              </button>
            </div>

            {/* Mobile User Info */}
            {session && (
              <div className="lg:hidden px-4 py-2 border-t border-gray-100 mt-2">
                <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-lg">
                  <Image
                    src={session?.user?.image || '/default-avatar.png'}
                    alt="User Avatar"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 truncate">{session?.user?.name}</p>
                    <p className="text-sm text-gray-500 truncate">{session?.user?.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
