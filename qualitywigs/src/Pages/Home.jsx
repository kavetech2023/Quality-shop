import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsLetterBox from '../Components/NewsLetterBox'
import ShopByLook from '../Components/ShopByLook'
import ShopByCategory from '../Components/ShopByCategory'
import VideoSection from '../Components/VideoSection'

const Home = () => {
  return (
    <>
    <Hero />
    <div>
        
        <ShopByCategory />
        <VideoSection />
        <LatestCollection />
        <ShopByLook />  
        <BestSeller />
        <OurPolicy />
        <NewsLetterBox />
    </div>
    </>
  )
}

export default Home