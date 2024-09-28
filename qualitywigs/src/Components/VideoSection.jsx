import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import ReactPlayer from 'react-player'
import Title from './TitleMe'

const videos = [
  {
    id: '1',
    title: 'Glamorous Hair Tutorial',
    source: 'local',
    url: '/videos/hair-tutorial.mp4',
    thumbnail: '/placeholder.svg?height=200&width=350&text=Hair+Tutorial'
  },
  {
    id: '2',
    title: 'Latest TikTok Hair Trend',
    source: 'tiktok',
    url: 'https://www.tiktok.com/@username/video/1234567890123456789',
    thumbnail: '/placeholder.svg?height=200&width=350&text=TikTok+Trend'
  },
  {
    id: '3',
    title: 'Instagram Reel: Quick Styling Tips',
    source: 'instagram',
    url: 'https://www.instagram.com/reel/abcdefghijk/',
    thumbnail: '/placeholder.svg?height=200&width=350&text=Instagram+Reel'
  },
  {
    id: '4',
    title: 'Product Showcase',
    source: 'local',
    url: 'https://www.instagram.com/reel/DATJ60NsGDi/?utm_source=ig_web_button_share_sheet',
    thumbnail: '/placeholder.svg?height=200&width=350&text=Product+Showcase'
  }
]

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoClick = (video) => {
    setActiveVideo(video)
    setIsPlaying(true)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 ">
        <div className='flex items-center justify-center text-center text-3xl'>
        <Title text1="TRENDING" text2="VIDEOS" />
        </div>
        
        <p className="text-center text-gray-600 mb-12">Discover the latest trends and tutorials from our experts and community</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
            {activeVideo ? (
              <ReactPlayer
                url={activeVideo.url}
                width="100%"
                height="100%"
                playing={isPlaying}
                controls={false}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-white text-xl">Select a video to play</p>
              </div>
            )}
            {activeVideo && (
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <h3 className="text-white text-lg font-semibold">{activeVideo.title}</h3>
                <button
                  onClick={handlePlayPause}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors duration-200"
                >
                  {isPlaying ? <Pause className="text-white" /> : <Play className="text-white" />}
                </button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="relative aspect-video bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVideoClick(video)}
              >
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Play className="text-white" size={32} />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-semibold truncate">{video.title}</p>
                </div>
                <div className="absolute top-2 right-2">
                  {video.source === 'tiktok' && <span className="text-white" size={20} ></span>}
                  {video.source === 'instagram' && <span className="text-white" size={20} ></span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}