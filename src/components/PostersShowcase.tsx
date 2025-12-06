'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiZoomIn } from 'react-icons/fi'

const posters = [
  { id: 1, src: "/travel.jpg", title: 'Travel' },
  { id: 2, src: '/djposter.jpg', title: 'Djposter' },
  { id: 3, src: '/pooramposter.jpg', title: 'Pooram poster' },
  { id: 4, src: '/kallan.jpg', title: 'Warning poster' },
  { id: 5, src: '/trip.jpg', title: 'Trip poster' },
  { id: 6, src: '/onam.jpg', title: 'Onam' }
]

export default function PostersShowcase() {
  const [selectedPoster, setSelectedPoster] = useState<typeof posters[0] | null>(null)

  return (
    <section id="posters" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Poster Designs
          </h2>
          <div className="w-16 h-[2px] bg-white mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl">
            A collection of my best graphic design work including event posters, brand identities, and social media graphics.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedPoster(poster)}
              className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group bg-gray-900"
            >
              <Image
                src={poster.src}
                alt={poster.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <FiZoomIn className="text-white text-xl" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-medium text-sm">
                  {poster.title}
                </p>
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[90vh] w-full"
            >
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute -top-14 right-0 text-gray-400 hover:text-white transition-colors p-2"
              >
                <FiX size={28} />
              </button>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={selectedPoster.src}
                  alt={selectedPoster.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                />
              </div>
              <p className="text-center text-white text-xl font-semibold mt-6">
                {selectedPoster.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
