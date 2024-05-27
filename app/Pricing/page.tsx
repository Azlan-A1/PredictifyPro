"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { color, motion } from "framer-motion"
import PlanCard from './PlanCard'

type BillingCycle = 'Monthly' | 'Yearly'

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('Monthly')

    // Handle the toggle menu
    const toggleMenu = () => {
        setBillingCycle(billingCycle === 'Monthly' ? 'Yearly' : 'Monthly')
    }

    // Creating the different plans
    const plans = {
        Monthly: [
            {
                name: 'Pro',
                price: '39',
                features: [
                    'Access to basic design templates',
                    'AI-generated design suggestions for 1 room',
                    'Color palette recommendations',
                    'Furniture layout planning',
                    'Email support',
                ],
                color: 'beige',
            },

            {
                name: 'Premium',
                price: '39',
                features: [
                    'AI-generated design suggestions for up to 3 rooms',
                    'Advanced design templates',
                    'Virtual room walkthroughs',
                    'Access to premium furniture and decor catalogs',
                    'Priority email support',
                    'Monthly design tips newsletter',
                ],
                color: 'beige',
            },
            
            {
                name: 'Business',
                price: '39',
                features: [
                    'AI-generated design suggestions for unlimited rooms',
                    'Personalized design consultations with AI',
                    'Augmented Reality (AR) room previews',
                    'Custom furniture and decor recommendations',
                    'Access to exclusive design workshops and webinars',
                    '24/7 priority customer support',
                    'Early access to new features and updates',
                ], 
                color: 'beige',
            }
        ],

        Yearly: [
            {
                name: 'Pro',
                price: '39',
                features: [
                    'Access to basic design templates',
                    'AI-generated design suggestions for 1 room',
                    'Color palette recommendations',
                    'Furniture layout planning',
                    'Email support',
                ],
                color: 'beige',
            },

            {
                name: 'Premium',
                price: '39',
                features: [
                    'AI-generated design suggestions for up to 3 rooms',
                    'Advanced design templates',
                    'Virtual room walkthroughs',
                    'Access to premium furniture and decor catalogs',
                    'Priority email support',
                    'Monthly design tips newsletter',
                ],
                color: 'beige',
            },
            
            {
                name: 'Business',
                price: '39',
                features: [
                    'AI-generated design suggestions for unlimited rooms',
                    'Personalized design consultations with AI',
                    'Augmented Reality (AR) room previews',
                    'Custom furniture and decor recommendations',
                    'Access to exclusive design workshops and webinars',
                    '24/7 priority customer support',
                    'Early access to new features and updates',
                ], 
                color: 'beige',
            }
        ]
    }

  return (
    <section className='relative w-full h-screen justify-center'>
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
                    
                    {/* Creating the toggle buttons for monthly and yearly */}
                    <div className='flex mb-8 relative'>
                        <motion.button onClick={() => setBillingCycle('Monthly')}
                        className={`px-6 py-2 rounded-1-lg ${billingCycle == 'Monthly' ? 
                            'bg-white text-black' : 'bg-black text-white'}`} 
                            whileTap={{ scale: 0.9 }}
                            animate={{ backgroundColor: billingCycle === 'Monthly' ? '#ffffff' : '#000000', color: billingCycle === 'Monthly' ? '#000000' : '#ffffff' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            >
                            Monthly
                        </motion.button>
                        <motion.button onClick={() => setBillingCycle('Yearly')}
                        className={`px-6 py-2 rounded-1-lg ${billingCycle == 'Yearly' ? 
                            'bg-white text-black' : 'bg-black text-white'}`}
                            whileTap={{ scale: 0.9 }}
                            animate={{ backgroundColor: billingCycle === 'Yearly' ? '#ffffff' : '#000000', color: billingCycle === 'Monthly' ? '#000000' : '#ffffff' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            >
                            Yearly
                        </motion.button>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                className='flex flex-row items-center gap-8 p-10'>
                    {plans[billingCycle].map((plan, index) => (
                        <PlanCard 
                            key={index}
                            color={plan.color}
                            name={plan.name}
                            description='This includes:'
                            price={plan.price}
                            features={plan.features}
                            btnText='Subscribe'
                            />
                    ))}
            </motion.div>
        </div>
    </section>
  )
}

export default Pricing