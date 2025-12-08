'use client'

import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

const videos = [
  { id: 1, embedId: 'LXWzzG0QDck', title: 'Cooking Time' },
  { id: 2, embedId: 'GD-N_2LuTew', title: 'Auto Show Highlights' },
  { id: 3, embedId: 'x7JarRd3zfk', title: 'Nature' },
  { id: 4, embedId: 'ledfY9acJd0', title: 'Marine World' },
  { id: 5, embedId: 'brl46JGVujI', title: 'Auto Highlights' },
  { id: 6, embedId: '5T0jNMmcoqk', title: 'Anangandi' },
  { id: 7, embedId: '0ffzQpUzw_M', title: 'Anganadi' },
  { id: 8, embedId: 'itEE8iIl1Ig', title: 'Pooram vibe' },
  { id: 9, embedId: '4dvuCKaNaQg', title: 'Nature' },
  { id: 10, embedId: 'D8t2DZMDl_w', title: 'Designers' },
]

export default function VideoShowcase() {
  return (
    <section
      id="videos"
      className="relative py-28 px-6 bg-black overflow-hidden"
    >

      {/* THEME BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0">
        {/* Glows */}
        <div className="absolute -top-40 -left-20 h-80 w-80 bg-fuchsia-500/25 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-20 h-96 w-96 bg-cyan-500/25 blur-[150px] rounded-full" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.12] 
          [background-image:radial-gradient(circle_at_top,_#ffffff22_0,_transparent_65%),
          linear-gradient(to_right,_#ffffff0a_1px,_transparent_1px),
          linear-gradient(to_bottom,_#ffffff0a_1px,_transparent_1px)]
          [background-size:100%_100%,90px_90px,90px_90px]"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-7xl mx-auto z-[5]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Video Works
          </h2>

          <div className="w-24 h-[3px] mt-5 mb-6 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400" />

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A curated showcase of edits — from cinematic reels to dynamic event highlights,
            produced with motion, story, and rhythm in mind.
          </p>
        </motion.div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              {/* VIDEO CARD */}
              <div className="relative aspect-video rounded-2xl overflow-hidden 
                bg-black/40 backdrop-blur-xl 
                border border-white/10 
                shadow-[0_0_25px_rgba(0,0,0,0.7)]
                transition-all duration-500 
                group-hover:border-purple-400/30"
              >

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 
                  bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20"
                />

                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* TITLE */}
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full 
                  bg-gradient-to-br from-fuchsia-600 to-cyan-400 
                  flex items-center justify-center shadow-md"
                >
                  <FiPlay className="text-black text-xs" />
                </div>

                <p className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
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
