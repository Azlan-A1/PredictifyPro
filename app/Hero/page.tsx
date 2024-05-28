'use client'

import React from 'react'
import Image from 'next/image'
import { HERO } from '@/constants'
import { useState } from 'react'
import Layout from '../../components/faq/layout'
import { FAQ } from '@/constants'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '@/styles/hero.css'

const Hero = () => {
  const [active, setActive] = useState([false, false, false, false, false, false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false, false, false, false, false, false])
      : setActive([true, true, true, true, true, true, true, true, true, true, true]);
  }

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1})
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1})
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1})
  
  const fadeIn = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0, 
      transition: { 
        duration: 2,
        type: 'spring',
        bounde: 0.9
      }
    }
  }

  return (
    <section className='relative w-full min-h-screen block justify-center'>
      {/* Home Splash */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className='w-full bg-[linear-gradient(to_bottom,rgba(49,84,44,0),rgba(255,255,255,0.8)),url("../public/bg1.avif")]'
      >
        <div className='h-auto w-full bg-gradient-to-r from-[#f5eddc] block md:flex flex-row justify-center items-center pt-1 pb-10'>
          <Image
            priority
            width={900}
            height={900}
            quality={100}
            className='pointer-events-none select-none hero-image w-full min-w-[400px] max-w-[900px] translate -translate-x-[210px] hidden md:block'
            src='/hero-house.png'
            alt='house image'
            style={{ objectFit: 'cover', marginTop: 100, zIndex: 1 }}
          />
          <div className='mx-10 md:mx-0 my-10 md:my-0'>
            <h1>{HERO[0].title}</h1>
            <h2>{HERO[0].subtitle}</h2>
          </div>
        </div>
      </motion.div>

      {/* Info Boxes */}
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeIn}
        className='h-auto w-full bg-[url("../public/bg2.avif")] py-4'
      >
        <div className='h-auto w-auto block md:flex flex-row justify-around items-center'>
          <div className='info-box'>
            <h3>{HERO[0].infoTitle1}</h3>
            <p>{HERO[0].infoBlurb1}</p>
          </div>
          <div className='info-box'>
            <h3>{HERO[0].infoTitle2}</h3>
            <p>{HERO[0].infoBlurb2}</p>
          </div>
          <div className='info-box'>
            <h3>{HERO[0].infoTitle3}</h3>
            <p>{HERO[0].infoBlurb3}</p>
          </div>
        </div>
        <div className='h-auto w-auto block md:flex flex-row justify-around items-center'>
          <div className='info-box'>
            <h3>{HERO[0].infoTitle4}</h3>
            <p>{HERO[0].infoBlurb4}</p>
          </div>
          <div className='info-box'>
            <h3>{HERO[0].infoTitle5}</h3>
            <p>{HERO[0].infoBlurb5}</p>
          </div>
          <div className='info-box'>
            <h3>{HERO[0].infoTitle6}</h3>
            <p>{HERO[0].infoBlurb6}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Services */}
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeIn}
        className='h-auto w-full transform'
      >
        <div className='h-[850px] md:h-auto w-full block md:flex flex-row py-20 px-12 
        justify-around bg-gradient-to-r from-[#f5eddc] items-center'>
          <Image 
            priority 
            width={600}
            height={300}
            quality={100} 
            className='pointer-events-none select-none w-full md:w-2/3 max-w-2xl'
            src='/dash3.png' 
            alt='dashboard img' 
          />
          <div className='w-96 min-w-[500px] my-10 md:my-0'>
            <h4 className='text-right'>{HERO[0].dashTitle}<hr className='border-gray-400'></hr></h4>
            <p className='w-3/4 text-right float-right'>{HERO[0].dashInfo}</p>
          </div>
        </div>
        <div className='h-auto w-full block md:flex flex-row py-24 px-12 justify-around bg-gradient-to-l from-[#f5eddc] items-center'>
          <div className='w-96 min-w-[500px]'>
            <h4>{HERO[0].designTitle}<hr className='border-gray-400'></hr></h4>
            <p className='w-2/3'>{HERO[0].designInfo}</p>
          </div>
          <Image 
              priority 
              width={550}
              height={300}
              quality={100} 
              className='pointer-events-none select-none rounded-s-3xl w-full md:w-2/3 max-w-2xl float-top my-10 md:my-0'
              src='/interior-design.webp' 
              alt='interio design img' 
          />
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <Layout
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={FAQ}
          turn={active}
          setTurn={setActive}
        />
      </motion.div>
    </section>
  )
}
export default Hero
