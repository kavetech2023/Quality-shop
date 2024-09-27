import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Crown, Sparkles, Heart, Star, Gem, Flower, Feather, Sun } from 'lucide-react'
import hairbrush from '../assets/bycategory/hair-brush.webp'
import wigs from '../assets/bycategory/wigs_category.jpg'
import extensions from '../assets/bycategory/extensions_category.jpg'
import straightener from '../assets/bycategory/straightener_category.jpg'
import headband from '../assets/bycategory/headband_category.jpg'
import wigglue from '../assets/bycategory/wig_glue.jpg'
import laceclosure from '../assets/bycategory/lace_frontal_closure.jpg'
import oliveoil from '../assets/bycategory/olive_oil.jpg'
import Title from './TitleMe'

const categories = [
  { name: 'Wigs', image: wigs, icon: Crown },
  { name: 'Extensions', image: extensions, icon: Sparkles },
  { name: 'Accessories', image: straightener, icon: Heart },
  { name: 'Hair Care', image: headband, icon: Star },
  { name: 'Styling Tools', image: hairbrush, icon: Gem },
  { name: 'Bundles', image: wigglue, icon: Flower },
  { name: 'Closures', image: laceclosure, icon: Feather },
  { name: 'Frontals', image: oliveoil, icon: Sun },
]

const FlyingHeart = () => {
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF']
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      initial={{ x: -50, y: Math.random() * window.innerHeight }}
      animate={{
        x: window.innerWidth + 50,
        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="absolute z-10"
    >
      {colors.map((color, index) => (
        <motion.path
          key={index}
          d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5z"
          fill={color}
          opacity={0.2}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: index * 1.1,
            repeat: Infinity,
          }}
        />
      ))}
      <motion.path
        d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5z"
        fill="#FF0000"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4.8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.svg>
  )
}

export default function ShopByCategory() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  const controls = useAnimation()

  useEffect(() => {
    const updateWidth = () => {
      const scrollWidth = carousel.current.scrollWidth
      const offsetWidth = carousel.current.offsetWidth
      setWidth(scrollWidth - offsetWidth)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    const infiniteScroll = async () => {
      await controls.start({
        x: -width,
        transition: { duration: 60, ease: "linear" }
      })
      controls.set({ x: 0 })
      infiniteScroll()
    }

    infiniteScroll()
  }, [controls, width])

  return (
    <section className="my-16 container mx-auto px-4 relative overflow-hidden">
      <FlyingHeart />
      <div className='text-3xl mx-auto text-center mb-4'>
        <Title text1="IN" text2="OUR SHOP" />
      </div>
      <div className="relative">
        <motion.div ref={carousel} className="overflow-hidden p-4">
          <motion.div 
            className="flex"
            animate={controls}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {[...categories, ...categories].map((category, index) => (
              <motion.div
                key={index}
                className="min-w-[200px] mr-8"
              >
                <div className="relative group cursor-pointer">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className="px-6 py-4 bg-gradient-to-r from-pink-300 to-pink-400 text-white border-2 border-pink-500 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              {React.createElement(category.icon, { size: 18, className: "mr-2" })}
              {category.name}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
            <motion.div
              className="absolute inset-0 bg-white opacity-0"
              initial={{ scale: 0, rotate: 0 }}
              whileTap={{ scale: 4, rotate: 45, opacity: 0.2 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        ))}
      </div>
    </section>
  )
}