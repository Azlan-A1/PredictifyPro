import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, button_Links } from '@/constants'
import Button from '../Button'
import NavLink from './NavLink'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { signOut } from 'next-auth/react'
import UserAccountnav from '../UserAccountnav'

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex items-center justify-between px-1 sm:px-2 md:px-4 lg:px-8 xl:px-10 text-xl z-40">
      <div className='flex items-center flex-grow' style={{ margin: 0 }}>
        <Link href="/">
          <Image src="/predictifylogo.png" alt="logo" width={150} height={150} priority={true} />
        </Link>

        <div className='hidden md:flex gap-10'>
          {NAV_LINKS.map((link) => (
            <NavLink link={link} key={link.key} />
          ))}
        </div>
      </div>

      <div className='h-12 hidden md:flex gap-8 pr-12'>
        {button_Links.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 bg-white rounded-full border-2 border-black px-4 py-2 flex items-center justify-center cursor-pointer transition-all hover:bg-black hover:font-bold hover:text-white">
            {link.label}
          </Link>
        ))}
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Link href="/sign-in" className="regular-16 bg-white rounded-full border-2 border-black px-4 py-2 flex items-center justify-center cursor-pointer transition-all hover:bg-black hover:font-bold hover:text-white">
            Sign In
          </Link>
        )}
      </div>

      <div>
        <button className='w-10 h-8 flex flex-col justify-between relative z-50 md:hidden'>
          <div className='w-10 h-1 bg-black rounded origin-left'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded origin-left'></div>
        </button>

        <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 hidden'>
          {NAV_LINKS.map((link) => (
            <div key={link.key} className=''>
              <Link href={link.href}>
                {link.label}
              </Link>
            </div>
          ))}
          {button_Links.map((link) => (
            <div key={link.key}>
              <Link href={link.href} className="regular-16 bg-white text-black rounded-full border-2 border-white px-5 py-5 flex items-center justify-center cursor-pointer transition-all hover:bg-black hover:font-bold hover:text-white">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
