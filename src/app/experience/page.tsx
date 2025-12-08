'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaBirthdayCake, FaCar, FaGlassCheers } from 'react-icons/fa'

const experiences = [
  {
    icon: FaTrophy,
    title: 'Graphic Editor at Trophy Shop',
    description:
      'Designed custom trophies, event certificates, branded banners, and promotional materials for various corporate and school events.',
    period: 'Professional Experience',
  },
  {
    icon: FaBirthdayCake,
    title: 'Freelance Birthday Videos',
    description:
      'Created cinematic birthday edits, animated slideshows, and personalized celebration videos with motion graphics.',
    period: 'Freelance Work',
  },
  {
    icon: FaCar,
    title: 'Auto Show Shoots & Edits',
    description:
      'Shot and edited automobile showcase videos with dynamic transitions, slow-motion shots, and high-energy visual storytelling.',
    period: 'Event Coverage',
  },
  {
    icon: FaGlassCheers,
    title: 'Inauguration Event Videos',
    description:
      'Documented opening ceremonies with professional videography and edited highlight reels capturing the event’s atmosphere.',
    period: 'Event Production',
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black pt-24 relative overflow-hidden">

      {/* THEME BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 bg-fuchsia-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-500/20 blur-[130px] rounded-full" />

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_top,_#ffffff22_0,_transparent_60%),linear-gradient(to_right,_#ffffff0a_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff0a_1px,_transparent_1px)] [background-size:100%_100%,90px_90px,90px_90px]" />
      </div>

      <section className="relative px-6 py-24 z-[5]">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              Experience
            </h1>

            <div className="w-24 h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 mt-5 mb-6 rounded-full" />

            <p className="text-gray-400 text-lg max-w-2xl">
              A curated collection of my hands-on work in design, videography, and real-world content production.
            </p>
          </motion.div>

          {/* EXPERIENCE CARDS */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 hover:border-purple-400/30 transition-all duration-300"
              >
                {/* Glow highlight */}
                <div className="absolute -top-14 -right-14 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500" />

                <div className="flex flex-col md:flex-row gap-6 items-start">

                  {/* ICON BOX */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.45)] group-hover:scale-105 transition-all duration-300">
                    <exp.icon className="text-black text-2xl" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 tracking-wide uppercase mb-4">
                      {exp.period}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                      {exp.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

     

        </div>
      </section>
    </main>
  )
}
