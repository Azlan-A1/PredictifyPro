import React from 'react'
import Image from 'next/image'
import { HOME } from '@/constants'

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen 
    flex md:block flex col justify-center bg-[linear-gradient(to_bottom,rgba(49,84,44,0),rgba(255,255,255,0.8)),url("../public/bg1.avif")]'>

      {/* Home Splash */}
      <div className='h-1000px w-screen bg-gradient-to-r from-[#f5eddc] flex flex-row justify-center items-center'>
        <Image 
            priority 
            width={900}
            height={900}
            quality={100} 
            className='pointer-events-none select-none hero-image'
            src='/hero-house.png' 
            alt='house image' 
            style={{ objectFit:'cover', translate: '-210px 10px', zIndex: '2', marginTop: 100}}
        />

        <div className='w-full transform -translate-x-10 -translate-y-50'>
          <h1>{HOME[0].title}</h1>
          <h2>{HOME[0].subtitle}</h2>
        </div>
      </div >

      {/* Info Boxes */}
      <div className='h-auto w-screen bg-[url("../public/bg2.avif")] transform -translate-y-11'>
        <div className='h-auto w-screen flex flex-row justify-around items-center'> 
          <div className='info-box'>
            <h3>{HOME[0].infotitle1}</h3>
            <p>{HOME[0].infoblurb1}</p>
          </div>

          <div className='info-box'>
            <h3>{HOME[0].infotitle2}</h3>
            <p>{HOME[0].infoblurb2}</p>
          </div>

          <div className='info-box'>
            <h3>{HOME[0].infotitle3}</h3>
            <p>{HOME[0].infoblurb3}</p>
          </div>
        </div>

        <div className='h-auto w-screen flex flex-row justify-around items-center'> 
          <div className='info-box'>
            <h3>{HOME[0].infotitle4}</h3>
            <p>{HOME[0].infoblurb4}</p>
          </div>

          <div className='info-box'>
            <h3>{HOME[0].infotitle5}</h3>
            <p>{HOME[0].infoblurb5}</p>
          </div>

          <div className='info-box'>
            <h3>{HOME[0].infotitle6}</h3>
            <p>{HOME[0].infoblurb6}</p>
          </div>
        </div>
      </div>
      

      

    </section>
  )
}

export default Hero
