"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className='relative w-full min-h screen justify-center'>
        {/* Co-Founder Logos */}
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
                    <Image 
                        priority={true}
                        width={300}
                        height={300}
                        quality={100} 
                        className='rounded-full 
                        object-cover border-[0.35rem] border-white shadow-xl' 
                        src='/azlan.png' 
                        alt='cofounder image' 
                        style={{ objectFit:'cover', marginTop: 100 }}
                    />
                    <p className='text-xl font-semibold'>
                        Azlan Ahmad, Founder and CEO
                    </p>
                </motion.div>
            </div>
        </div>
        {/* Co-founder Paragraph Section */}
        <div className='w-full px-4 mt-10'>
            <motion.p 
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
            className='text-center'>
                We want to be able to provide homeowners, investors, and real estate agents with the capabilities to make better decisions more precisely and accurately. Real estate market enthusiasts are ambitious to understand what their property will be worth in the coming months to years.
                <br /><br />
                At Predictify, it is our mission to be able to serve that awareness towards our consumers so that they can begin their journey.
                <br /><br />
                The founders of this application desired for this service to provide a means for consumers to grow their knowledge on the exchange of property and housing market design.
            </motion.p>
        </div>
    </section>
  )
}

export default About