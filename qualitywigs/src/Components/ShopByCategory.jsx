import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Crown, Sparkles, Heart, Star, Gem, Flower, Feather, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import hairbrush from '../assets/bycategory/hair-brush.webp';
import wigs from '../assets/bycategory/wigs_category.jpg';
import extensions from '../assets/bycategory/extensions_category.jpg';
import straightener from '../assets/bycategory/straightener_category.jpg';
import headband from '../assets/bycategory/headband_category.jpg';
import wigglue from '../assets/bycategory/wig_glue.jpg';
import laceclosure from '../assets/bycategory/lace_frontal_closure.jpg';
import oliveoil from '../assets/bycategory/olive_oil.jpg';
import Title from './TitleMe';

const categories = [
  { name: 'Wigs', image: wigs, icon: Crown },
  { name: 'Extensions', image: extensions, icon: Sparkles },
  { name: 'Accessories', image: straightener, icon: Heart },
  { name: 'Hair Care', image: headband, icon: Star },
  { name: 'Styling Tools', image: hairbrush, icon: Gem },
  { name: 'Bundles', image: wigglue, icon: Flower },
  { name: 'Closures', image: laceclosure, icon: Feather },
  { name: 'Frontals', image: oliveoil, icon: Sun },
];
export default function ShopByCategory() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  const controls = useAnimation()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const moveLeft = () => {
    controls.start({
      x: controls.get("x") + 300,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }

  const moveRight = () => {
    controls.start({
      x: controls.get("x") - 300,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }

  return (
    <section className="my-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="relative">
        <motion.div ref={carousel} className="overflow-hidden">
          <motion.div 
            className="flex"
            animate={controls}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {categories.map((category, index) => (
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
                    <h3 className="text-white text-xl font-semibold  px-4 py-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <button
          onClick={moveLeft}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={moveRight}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}