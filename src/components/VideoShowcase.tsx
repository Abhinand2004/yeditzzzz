'use client'

import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

const videos = [
  { id: 1, embedId: 'dQw4w9WgXcQ', title: 'Birthday Celebration Edit' },
  { id: 2, embedId: 'jNQXAC9IVRw', title: 'Auto Show Highlights' },
  { id: 3, embedId: '9bZkp7q19f0', title: 'Event Coverage' },
  { id: 4, embedId: 'kJQP7kiw5Fk', title: 'Inauguration Ceremony' },
  { id: 5, embedId: 'RgKAFK5djSk', title: 'Wedding Highlights' },
  { id: 6, embedId: 'JGwWNGJdvx8', title: 'Corporate Event' },
  { id: 7, embedId: 'CevxZvSJLk8', title: 'Music Video Edit' },
  { id: 8, embedId: 'hT_nvWreIhg', title: 'Travel Montage' },
  { id: 9, embedId: 'fJ9rUzIMcZQ', title: 'Product Showcase' },
  { id: 10, embedId: 'YQHsXMglC9A', title: 'Festival Recap' },
]

export default function VideoShowcase() {
  return (
    <section id="videos" className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Video Works
          </h2>
          <div className="w-16 h-[2px] bg-white mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl">
            Watch my video editing projects including event coverage, music videos, and creative edits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/50">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <FiPlay className="text-white/60 text-xs" />
                </div>
                <p className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
