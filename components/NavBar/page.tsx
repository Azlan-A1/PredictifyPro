"use client"

import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, button_Links } from '@/constants'
import { useState } from 'react'
import { motion } from "framer-motion"
import NavLink from './NavLink'
import '@/styles/nav.css' 

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
    <nav className="navbar">
       {/* Implementing the logo */}
       <div className='navbar-logo'>
        <Link href="/">
          <Image src="/predictifylogo.png" alt="logo" 
          width={150} height={150} priority={true}/>
        </Link>  

      {/* Implementing the responsive nav bar options */}
      <div className='navbar-links'>
        {NAV_LINKS.map((link) => (
          <NavLink link={link} key={link.key}/>
        ))}
      </div>
      </div>

      {/* Creating the Log in and Get Started button */}
      <div className='navbar-buttons'>
      {button_Links.map((link) => (
            <Link href={link.href} key={link.key} className="button">
              {link.label}
            </Link>
      ))}
      </div>

      {/* Implementing the responsive menu for mobile */}
      <div>
        {/* Creating the menu button */}
        <button className='menu-button'
        onClick={() => setOpen(!open)}>
          <motion.div 
            variants={topVariants} 
            animate={open ? "opened" : "closed"}
            className='menu-line origin-left'>
          </motion.div>
          <motion.div 
            variants={centerVariants} 
            animate={open ? "opened" : "closed"}
            className='menu-line'>
          </motion.div>
          <motion.div 
            variants={bottomVariants} 
            animate={open ? "opened" : "closed"}
            className='menu-line origin-left'>
          </motion.div>
        </button>

        {/* Creating the menu list */}
        {open && (
        <motion.div 
        variants={menuVariants}
        initial="closed"
        animate="opened"
        className='menu'>
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
                className="button">
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