import React from 'react'
import img from '../assets/salon.jpg'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border rounded-md overflow-hidden border-gray-400'>
          

              {/* Right side Hero*/}
              <img className="w-full " src={img} alt="" height={50} />



            </div>
    
  )
}


export default Hero