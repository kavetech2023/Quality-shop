import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum yeah yeah.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>_254 728284336</li>
                    <li>Contact@qualitywigs.com</li>
                </ul>
            </div>

        </div>
        <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2024@ qualitywigs.com - All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer