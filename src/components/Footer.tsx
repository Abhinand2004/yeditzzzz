'use client'

import Link from 'next/link'
import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">YK</h3>
            <p className="text-gray-500 leading-relaxed">
              Professional Graphic Designer & Video Editor creating stunning visuals and captivating video content.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white mb-6 tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#posters" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Posters
                </Link>
              </li>
              <li>
                <Link href="/#videos" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white mb-6 tracking-widest uppercase">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/yedits"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="mailto:contact@yadhukrishnan.com"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Yadhukrishnan. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            Design & Development
          </p>
        </div>
      </div>
    </footer>
  )
}
