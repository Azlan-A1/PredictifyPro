import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HERO } from '@/constants'

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen flex md:block justify-center'>
      {/* Home Splash */}
      <div className='w-full bg-[linear-gradient(to_bottom,rgba(49,84,44,0),rgba(255,255,255,0.8)),url("../public/bg1.avif")]'>
        <div className='h-auto w-full bg-gradient-to-r from-[#f5eddc] flex flex-row justify-center items-center'>
          <Image 
              priority 
              width={900}
              height={900}
              quality={100} 
              className='pointer-events-none select-none hero-image'
              src='/hero-house.png' 
              alt='house image' 
              style={{ objectFit:'cover', translate: '-210px 10px', marginTop: 100, zIndex: 1}}
          />

          <div className='w-full transform -translate-x-10 -translate-y-50'>
            <h1>{HERO[0].title}</h1>
            <h2>{HERO[0].subtitle}</h2>
          </div>
        </div>
      </div >

      {/* Info Boxes */}
      <div className='h-auto w-full bg-[url("../public/bg2.avif")]'>
        <div className='h-auto w-auto flex flex-row justify-around items-center'> 
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
        
        <div className='h-auto w-auto flex flex-row justify-around items-center'> 
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
      </div>
      
      {/* Info Boxes */}
      <div className='h-auto w-full transform'>
        <div className='h-auto w-full flex flex-row py-20 px-16 justify-between bg-gradient-to-r from-[#f5eddc] items-center'>
          <Image 
              priority 
              width={600}
              height={300}
              quality={100} 
              className='pointer-events-none select-none'
              src='/dash3.png' 
              alt='dashboard img' 
              style={{ objectFit:'cover'}}
          />
          
        <div className='w-1/3 mx-32'>
          <h4 className='text-right'>{HERO[0].dashTitle}<hr></hr></h4>
          <p className='w-2/3 text-right float-right'>{HERO[0].dashInfo}</p>
        </div>
        </div>

        <div className='h-auto w-full flex flex-row py-24 px-16 justify-between bg-gradient-to-l from-[#f5eddc] items-center'>
          <div className='w-1/3 mx-32'>
            <h4>{HERO[0].designTitle}<hr></hr></h4>
            <p className='w-2/3'>{HERO[0].designInfo}</p>
          </div>
          
          <Image 
              priority 
              width={550}
              height={300}
              quality={100} 
              className='pointer-events-none select-none'
              src='/interior-design.webp' 
              alt='interio design img' 
              style={{ objectFit:'cover', marginRight:30, borderRadius: 20}}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
