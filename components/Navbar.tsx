"use client"

import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <nav className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 z-1">
      {/* Implementing the logo */}
      <div className='left-0'>
        <Link href="/">
          <Image src="/predictifylogo.png" alt="logo" 
          width={74} height={29}/>
        </Link>  
      </div>

      <div className='hidden md:flex gap-4'>
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-black-50 
            flexCentre cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
      </div>

      {/* Implementing the responsive menu */}
      <div className='md:hidden'>
        {/* Creating the menu button */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
        onClick={(() => setOpen(!open))}>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div>
        </button>

        {/* Creating the menu list */}
        {open && (
        <div className='absolute top-0 left-0 w-screen h-screen bg-black
        text-white flex flex-col items-center justify-center gap-8 text-4xl'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar