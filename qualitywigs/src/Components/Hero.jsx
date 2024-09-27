import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import your images here
import img1 from '../assets/salon.jpg'
import img2 from '../assets/1.jpg'
import img3 from '../assets/salon.jpg'

const images = [img1, img2, img3]

const categories = [
  { name: 'Straight', image: '/placeholder.svg?height=100&width=100&text=Straight' },
  { name: 'Curly', image: '/placeholder.svg?height=100&width=100&text=Curly' },
  { name: 'Wavy', image: '/placeholder.svg?height=100&width=100&text=Wavy' },
  { name: 'Kinky', image: '/placeholder.svg?height=100&width=100&text=Kinky' },
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    // Here you would typically navigate to the category page
    console.log(`Navigating to ${category} category`)
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl h-[60vh] md:h-[80vh]">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Salon ${currentImage + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover Your Perfect Style
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 text-center text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Premium Quality Hair Extensions and Wigs
        </motion.p>
        <motion.button
          className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
        onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 md:space-x-4 px-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-full p-1 cursor-pointer ${
              selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
            />
            <p className="text-center text-xs mt-1 font-semibold">{category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Hero