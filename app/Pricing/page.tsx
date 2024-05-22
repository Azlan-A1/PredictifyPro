"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import PlanCard from './PlanCard'

const Pricing = () => {
  return (
    <section className='relative w-full min-h screen justify-center'>
        <div className='bg-[linear-gradient(to_bottom,rgba(49,84,44,0),rgba(255,255,255,0.8)),url("../public/bg1.avif")]'>
            <div className='h-1000px w-screen bg-gradient-to-r from-[#f5eddc] flex flex-row justify-center items-center'>
            <motion.div 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                className='flex flex-col items-center'
                >
                    <h1 className='mb-4 text-7xl font-black text-black'>Choose a plan</h1>
                    <p className='text-lg text-black'>Purchase down below and gain access</p>
                </motion.div>
            </div>
            <motion.div 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                className='flex flex-col items-center gap-8 p-10'>
                    <PlanCard 
                    color='beige'
                    name='Access'
                    description='Get more advanced'
                    price='9.99'
                    features={["Analyze current trends in the US and Canada housing markets.", 
                    "Offer insights into historical price trends for residential properties.",
                    "Explore market predictions for future housing prices.",
                    "Provide detailed, data-driven market reports tailored to user-specific inquiries."]}
                    btnText='Buy Now'
                    />
            </motion.div>
        </div>
    </section>
  )
}

export default Pricing