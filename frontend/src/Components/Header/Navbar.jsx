'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const navData = [
  { Name: 'Home', path: '/' },
  { Name: 'Item List', path: '/item' },
  { Name: 'Contact', path: '/contact' },
  { Name: 'Add product', path: '/product' },
]

const Navbar = () => {
  const router = useRouter()
  const { data: session, status } = useSession() // NextAuth session
  console.log(session)

  const [isAuth, setIsAuth] = useState(false) // Mock login

  // check cookies for mock login
  useEffect(() => {
    const auth = Cookies.get('auth')
    setIsAuth(!!auth)
  }, [])

  const handleLogout = () => {
    // remove mock auth cookie
    Cookies.remove('auth')
    setIsAuth(false)
    // logout NextAuth session if exists
    if (session) signOut({ callbackUrl: '/' })
    else router.push('/login')
  }

  const loggedIn = isAuth || session // Either mock login or NextAuth

  return (
    <header>
      <nav className="flex justify-between items-center p-3 bg-white shadow">
        <Link href="/">
          <h1 className="text-2xl font-bold text-green-700">E-shopping</h1>
        </Link>
        <ul className="hidden md:flex gap-4 font-semibold">
          {navData.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.Name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <div className="">
            {' '}
            {session && (
              <div className="flex">
                <div className="">
                  <h1>{session?.user?.name}</h1>
                  <h1>{session?.user?.email}</h1>
                </div>
                <div className="">
                  <figure>
                    <Image
                      src={session?.user?.image}
                      alt=""
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                  </figure>
                </div>
              </div>
            )}
          </div>
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold rounded-lg
              border border-green-500 text-green-700
              hover:bg-green-500 hover:text-white transition"
            >
              Log out
            </button>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold rounded-lg
              bg-green-600 text-white hover:bg-green-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
