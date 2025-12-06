'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="
      min-h-screen w-full bg-black text-white 
      flex flex-col justify-start 
      pt-24 px-5 md:px-20 relative overflow-hidden
    ">

      {/* SUBTLE GRAIN OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* TOP LABEL */}
      <p className="text-xs md:text-sm tracking-widest text-gray-400 uppercase mb-4 z-10">
        Visual Identity & Editing
      </p>

      {/* MAIN TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-tight tracking-tight z-10">
        <span className="block">Crafting Visuals</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white/60">
          That Define Identity.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mt-4 mb-8 leading-relaxed z-10">
        I help brands communicate through clean design, modern visuals, and emotionally impactful edits.
        Strategy first. Design with intention.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 z-10">
        <a
          href="https://www.instagram.com/yeditzzz_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
        >
          <FaInstagram /> @yedits
        </a>

        <button className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
          View Work
        </button>
      </div>

      {/* IMAGE CARD — HIGH PERFORMANCE VERSION */}
      <div
        className="
          w-full max-w-sm mt-10 rounded-xl overflow-hidden shadow-xl 
          border border-white/10 
          md:absolute md:right-20 md:bottom-20 md:w-96 md:h-[420px] md:mt-0
        "
      >
        <Image
          src="/user.jpg"
          alt="Portfolio Visual"
          width={600}
          height={800}
          priority
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* BACKGROUND TYPOGRAPHY */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 0.5 }}
        className="absolute right-2 bottom-10 text-[80px] md:text-[200px] lg:text-[260px] font-black leading-none tracking-tighter select-none"
      >
        YK
      </motion.h2>

    </section>
  )
}
