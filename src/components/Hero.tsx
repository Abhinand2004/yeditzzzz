'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

export default function Hero() {
  return (
    // Main Section - Full screen and centered padding
    <section className="relative min-h-screen w-full bg-black text-white flex flex-col justify-center pt-28 pb-16 px-5 sm:px-8 md:px-16 overflow-hidden">

      {/* ====== BACKGROUND GLOWS ====== */}
      <div className="pointer-events-none absolute inset-0 z-[0]">
        <div className="absolute -top-32 left-0 h-72 w-72 bg-fuchsia-500/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-20 h-80 w-80 bg-purple-600/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-10 h-80 w-80 bg-cyan-500/20 blur-[150px] rounded-full" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.10]
          [background-image:radial-gradient(circle_at_top,_#ffffff22_0,_transparent_60%),
          linear-gradient(to_right,_#ffffff0a_1px,_transparent_1px),
          linear-gradient(to_bottom,_#ffffff0a_1px,_transparent_1px)]
          [background-size:100%_100%,90px_90px,90px_90px]"
        />
      </div>

      {/* 2. Main Content Wrapper: **max-w-7xl** for more space utilization */}
      <div className="relative z-[5] max-w-7xl mx-auto w-full 
        md:grid md:grid-cols-12 md:gap-20 lg:gap-24 md:items-center"> {/* Increased gap for more breathing room */}

        {/* ====== TEXT BLOCK - Dominant text size and column usage (7/12) ====== */}
        <div className="relative z-[5] max-w-xl md:col-span-7 md:max-w-none">
          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight" // Increased text size on large screens
          >
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">Visual Stories</span><br />
            That Speak.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-base sm:text-lg lg:text-l xl:text-l mt-4 mb-10 leading-relaxed" // Increased text size and margin on large screens
          >
            I design visuals, edits, and motion that connect emotionally and define brand identity.
            Clean. Modern. Purposeful.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/yeditzzz_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-7 py-3 rounded-full text-black font-semibold shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:opacity-90 transition-all text-lg"
            >
              <FaInstagram className="text-xl" /> @yedits
            </a>

            {/* View Work */}
            <button className="border border-white/25 px-7 py-3 rounded-full hover:bg-white hover:text-black transition-all text-lg">
              View Work
            </button>
          </motion.div>
        </div>

        {/* ====== IMAGE CARD - Takes remaining columns (5/12) ====== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="
            relative z-[5]
            w-full max-w-xs sm:max-w-sm mx-auto 
            mt-12 sm:mt-16 
            rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.7)] 
            border border-white/10 backdrop-blur-xl
            md:col-span-5 md:w-full md:max-w-none md:mx-0 md:mt-0 
            // Fixed height for better desktop alignment
            h-[350px] lg:h-[450px] 
          "
        >
          <Image
            src="/user.jpg"
            alt="Portfolio Image"
            width={800}
            height={800}
            priority
            className="w-full h-full object-cover" 
          />

          {/* Gradient Shine Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </div> {/* End Main Content Wrapper */}

      {/* ====== BIG BACKGROUND TYPOGRAPHY (Increased size) ====== */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-10 right-4 md:right-12 text-[120px] sm:text-[200px] lg:text-[260px] xl:text-[300px] font-extrabold tracking-tight leading-none select-none pointer-events-none"
      >
        YK
      </motion.h2>

    </section>
  )
}