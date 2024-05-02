import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen md:h-screen 
    flex md:block flex col justify-center'>
        <Image 
            priority 
            fill 
            quality={100} 
            className='pointer-events-none select-none'
            src='/toronto.png' 
            alt='toronto image' 
            style={{ objectFit:'cover', objectPosition: '75%' }}
        />
    </section>
  )
}

export default Hero
