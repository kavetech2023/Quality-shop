import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Title from './Title'
import wedding from '../assets/bylook/wedding.jpg'
import vacation from '../assets/bylook/vacation.webp'
import date from '../assets/bylook/date.jpg'
import casual from '../assets/bylook/casual.webp'
import party from '../assets/bylook/party.webp'
import work from '../assets/bylook/work.jpg'

const looks = [
  { name: 'Vacation', image: vacation , link: '/shop/vacation' },
  { name: 'Wedding', image: wedding, link: '/shop/wedding' },
  { name: 'Date Night', image: date, link: '/shop/date-night' },
  { name: 'Casual', image: casual, link: '/shop/casual' },
  { name: 'Work', image: work, link: '/shop/work' },
  { name: 'Party', image: party, link: '/shop/party' },
]

const ShopByLook = () => {
  return (
    <section className="my-16 container mx-auto px-4">
      <div className="text-center mb-12  py-2">
        <div className='text-3xl '>
            <Title text1="SHOP" text2="BY LOOK" />
        </div>
       
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover the perfect hairstyle for every occasion. From beachy waves for your vacation to elegant updos for weddings, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {looks.map((look, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <Link to={look.link}>
              <img
                src={look.image}
                alt={`${look.name} Look`}
                className="w-full  object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{look.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white py-3 px-8 rounded-full font-medium text-lg hover:bg-gray-800 transition duration-300"
        >
          Explore All Looks
        </motion.button>
      </div>
    </section>
  )
}

export default ShopByLook