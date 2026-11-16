'use client'

import { useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiDownload, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'

type Brochure = {
  id: number
  title: string
  description: string
  file: string
  ratio: string
  slides: string[]
}

const brochures: Brochure[] = [
  {
    id: 1,
    title: 'Pouch Packaging',
    description: 'Packaging design for Natural Green Indian Cardamom, presented across front and back panels.',
    file: '/brochures/pouch-brochure.pdf',
    ratio: 'aspect-[3/2]',
    slides: [1, 2, 3, 4, 5].map((n) => `/brochures/pouch-page-${n}.jpg`),
  },
  {
    id: 2,
    title: 'Product Catalogue',
    description: 'A two-page catalogue of the Spicera range, covering whole spices, powders and flakes.',
    file: '/brochures/spicera-brochure.pdf',
    ratio: 'aspect-[7/5]',
    slides: [1, 2].map((n) => `/brochures/spicera-page-${n}.jpg`),
  },
]

function BrochureCarousel({
  brochure,
  onZoom,
}: {
  brochure: Brochure
  onZoom: (src: string, title: string) => void
}) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = brochure.slides.length

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1)
    setIndex((next + total) % total)
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(index + 1)
    else if (info.offset.x > 60) go(index - 1)
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <div className={`relative ${brochure.ratio} bg-black/60 overflow-hidden`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onClick={() => onZoom(brochure.slides[index], `${brochure.title} · Page ${index + 1}`)}
            className="absolute inset-0 cursor-zoom-in group"
          >
            <Image
              src={brochure.slides[index]}
              alt={`${brochure.title} page ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-3 pointer-events-none select-none"
              draggable={false}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-lg border border-white/10 flex items-center justify-center">
                <FiZoomIn className="text-white text-lg" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous page"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-lg border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next page"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-lg border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="flex items-center gap-2 px-6 py-4 border-t border-white/10">
        {brochure.slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-gradient-to-r from-fuchsia-500 to-cyan-400' : 'w-2 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
        <span className="ml-3 text-xs text-gray-500 tabular-nums">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  )
}

export default function BrochuresShowcase() {
  const [zoomed, setZoomed] = useState<{ src: string; title: string } | null>(null)

  return (
    <section id="brochures" className="relative py-28 px-6 bg-black overflow-hidden">

      {/* BACKGROUND GLOWS + GRID */}
      <div className="pointer-events-none absolute inset-0 z-[0]">
        <div className="absolute -top-32 right-0 h-80 w-80 bg-cyan-500/25 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-fuchsia-500/25 blur-[150px] rounded-full" />

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
            Brochures
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-500 rounded-full mt-4 mb-6" />

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Printed-style brochures and catalogues crafted for brand presentation, product information and packaging.
          </p>
        </motion.div>

        {/* CAROUSELS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brochures.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-xl mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <a
                  href={item.file}
                  download
                  className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white
                    bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
                >
                  <FiDownload size={16} />
                  <span>PDF</span>
                </a>
              </div>

              <BrochureCarousel brochure={item} onZoom={(src, title) => setZoomed({ src, title })} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ZOOM POPUP */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh]"
            >
              <button
                onClick={() => setZoomed(null)}
                aria-label="Close"
                className="absolute -top-14 right-0 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={28} />
              </button>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={zoomed.src}
                  alt={zoomed.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-contain p-2"
                />
              </div>

              <p className="text-center text-white text-lg font-semibold mt-6">{zoomed.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
