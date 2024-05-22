"use client"

import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, button_Links } from '@/constants'
import Button from '../Button'
import { useState } from 'react'
import { motion } from "framer-motion"
import NavLink from './NavLink'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  }
  const centerVariants = {
    closed: {
      opacity: 1,

    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,

    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    }
  }
  const menuVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    },
  }
  const menuItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <nav className="flex items-center justify-between px-1
      sm:px-2 md:px-4 lg:px-8 xl:px-10 text-xl z-40">
       {/* Implementing the logo */}
       <div className='flex items-center flex-grow' style={{ margin : 0}}>
        <Link href="/">
          <Image src="/predictifylogo.png" alt="logo" 
          width={150} height={150} priority={true}/>
        </Link>  

      {/* Implementing the responsive nav bar options */}
      <div className='hidden md:flex gap-10'>
        {NAV_LINKS.map((link) => (
          <NavLink link={link} key={link.key}/>
          ))}
          </div>
      </div>

      {/* Creating the Log in and Get Started button */}
      <div className='h-12 hidden md:flex gap-8 pr-12'>
      {button_Links.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 bg-white rounded-full 
            border-2 border-black px-4 py-2 flex items-center justify-center 
            cursor-pointer transition-all hover:bg-black hover:font-bold hover:text-white">
              {link.label}
            </Link>
          ))}
      </div>

      {/* Implementing the responsive menu for mobile */}
      <div>
        {/* Creating the menu button */}
        <button className='w-10 h-8 flex flex-col justify-between relative z-50 md:hidden'
        onClick={(() => setOpen(!open))}>
          <motion.div 
            variants={topVariants} 
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left'>
          </motion.div>
          <motion.div 
            variants={centerVariants} 
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded'>
          </motion.div>
          <motion.div 
            variants={bottomVariants} 
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left'>
          </motion.div>
        </button>

        {/* Creating the menu list */}
        {open && (
        <motion.div 
        variants={menuVariants}
        initial="closed"
        animate="opened"
        className='absolute top-0 left-0 w-screen h-screen bg-black
        text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
          {NAV_LINKS.map((link) => (
            <motion.div 
              variants={menuItemVariants} 
              key={link.key} className=''>
                <Link href={link.href}>
                  {link.label}
                </Link>
            </motion.div>
          ))}
          {button_Links.map((link) => (
            <motion.div variants={menuItemVariants} 
              key={link.key}>
                <Link href={link.href} 
                className="regular-16 bg-white text-black rounded-full 
                border-2 border-white px-5 py-5 flex items-center justify-center 
                cursor-pointer transition-all hover:bg-black hover:font-bold hover:text-white">
                  {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar