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
  { id: 6, src: '/onam.jpg', title: 'Onam' },
  { id: 7, src: '/clgposter.PNG', title: 'Clg-Poster' },

]

export default function PostersShowcase() {
  const [selectedPoster, setSelectedPoster] = useState<typeof posters[0] | null>(null)

  return (
    <section id="posters" className="relative py-28 px-6 bg-black overflow-hidden">

      {/* BACKGROUND GLOWS + GRID */}
      <div className="pointer-events-none absolute inset-0 z-[0]">
        <div className="absolute -top-32 left-0 h-80 w-80 bg-fuchsia-500/25 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-500/25 blur-[150px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.1]
          [background-image:radial-gradient(circle_at_top,_#ffffff22_0,_transparent_60%),
          linear-gradient(to_right,_#ffffff0a_1px,_transparent_1px),
          linear-gradient(to_bottom,_#ffffff0a_1px,_transparent_1px)]
          [background-size:100%_100%,90px_90px,90px_90px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-[5]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Poster Designs
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 rounded-full mt-4 mb-6" />

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A curated collection of event posters, branding visuals, and digital creatives designed with attention to detail and strong aesthetic sense.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedPoster(poster)}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group
                bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)]
                hover:border-purple-400/30 transition-all duration-500"
            >

              {/* Image */}
              <Image
                src={poster.src}
                alt={poster.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Hover overlay glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500
                bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20"
              />

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-lg border border-white/10 flex items-center justify-center">
                  <FiZoomIn className="text-white text-xl" />
                </div>
              </div>

              {/* Title Slide-Up */}
              <div className="absolute bottom-0 left-0 right-0 p-4 
                bg-gradient-to-t from-black via-black/70 to-transparent 
                translate-y-full group-hover:translate-y-0 transition-all duration-500"
              >
                <p className="text-white font-semibold text-sm">{poster.title}</p>
              </div>

              {/* Border hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN POPUP */}
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
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[90vh] w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute -top-14 right-0 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={28} />
              </button>

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black">
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


