"use client"

import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Navbar from "@/components/NavBar/page";
import Footer from "@/components/Footer/page";
import { motion } from "framer-motion"

const TransitionAnimation = ({children}) => {
  return (
    <AnimatePresence>
        <div className='w-screen h-screen z-40'>
          <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{height: "0vh"}}
          exit={{height: "100vh"}}
          transition={
            {
              duration: 0.5, 
              ease: "easeOut",
            }
          }/>
          <div className='h-24'>
              <Navbar />
          </div>
          <div className='h-[calc(100vh-6rem)]'>{children}</div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionAnimation