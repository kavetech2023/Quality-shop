import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import hairbrush from '../assets/bycategory/hair-brush.webp'
import wigs from '../assets/bycategory/wigs_category.jpg'
import extensions from '../assets/bycategory/extensions_category.jpg'
import straightener from '../assets/bycategory/straightener_category.jpg'
import headband from '../assets/bycategory/headband_category.jpg'
import wigglue from '../assets/bycategory/wig_glue.jpg'
import laceclosure from '../assets/bycategory/lace_frontal_closure.jpg'
import oliveoil from '../assets/bycategory/olive_oil.jpg'
import Title from './title'

const categories = [
  { name: 'Wigs', image: wigs },
  { name: 'Extensions', image: extensions },
  { name: 'Accessories', image: straightener },
  { name: 'Hair Care', image: headband },
  { name: 'Styling Tools', image: hairbrush },
  { name: 'Bundles', image: wigglue },
  { name: 'Closures', image: laceclosure },
  { name: 'Frontals', image: oliveoil },
]

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
    <section className="my-16 container mx-auto px-4">
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

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className="px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold text-sm hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </section>
  )
}