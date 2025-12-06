'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaBirthdayCake, FaCar, FaGlassCheers } from 'react-icons/fa'


const experiences = [
  {
    icon: FaTrophy,
    title: 'Graphic Editor at Trophy Shop',
    description: 'Created custom trophy designs, certificates, and award graphics. Worked on branding materials, promotional banners, and event signage for various clients.',
    period: 'Professional Experience',
  },
  {
    icon: FaBirthdayCake,
    title: 'Freelance Birthday Videos',
    description: 'Produced creative birthday celebration videos with custom animations, photo montages, and personalized effects. Created memorable keepsakes for special occasions.',
    period: 'Freelance Work',
  },
  {
    icon: FaCar,
    title: 'Auto Show Video Shoots & Edits',
    description: 'Captured and edited high-quality videos of automobile exhibitions and car shows. Produced dynamic content showcasing vehicles with professional transitions and effects.',
    period: 'Event Coverage',
  },
  {
    icon: FaGlassCheers,
    title: 'Inauguration Event Videos',
    description: 'Documented and edited inauguration ceremonies and grand opening events. Created polished videos capturing key moments with professional cinematography.',
    period: 'Event Production',
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-20 bg-black">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              Experience
            </h1>
            <div className="w-16 h-[2px] bg-white mb-6" />
            <p className="text-gray-500 text-lg max-w-2xl">
              A journey through my professional work in graphic design and video editing, 
              showcasing diverse projects and creative endeavors.
            </p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-950 border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <exp.icon className="text-black text-2xl" />
                    </div>
                    
                    <div className="flex-1">
                      <span className="inline-block px-4 py-1.5 text-xs font-medium bg-white/5 text-gray-400 rounded-full mb-4 tracking-wide uppercase">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="bg-white rounded-2xl p-10 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
                Looking to collaborate?
              </h2>
              <p className="text-gray-600 mb-8 text-lg max-w-lg mx-auto">
                I'm always open to discussing new projects and creative opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
    </main>
  )
}
