'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaEnvelope, FaPaperPlane, FaCheck } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen pt-24 bg-black">
      <section className="pb-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-tight">
              Get in Touch
            </h1>

            <div className="w-14 sm:w-16 h-[2px] bg-white mb-6" />

            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Have a project in mind? Let’s work together to create something amazing.
            </p>
          </motion.div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* FORM CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-950 border border-white/5 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">Message Sent!</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-400 mb-2 text-sm"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-white/30 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-400 mb-2 text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-white/30 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-400 mb-2 text-sm"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-white/30 focus:outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </motion.div>

            {/* RIGHT SIDE CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* SOCIAL CARD */}
              <div className="bg-gray-950 border border-white/5 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Connect with Me
                </h2>

                <div className="space-y-4">

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com/yedits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-black rounded-xl hover:bg-white/5 border border-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <FaInstagram className="text-black text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Instagram</p>
                      <p className="text-white font-semibold text-base group-hover:text-gray-300">
                        @yedits
                      </p>
                    </div>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:contact@yadhukrishnan.com"
                    className="flex items-center gap-4 p-4 bg-black rounded-xl hover:bg-white/5 border border-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-black text-lg" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Email</p>
                      <p className="text-white font-semibold text-base group-hover:text-gray-300">
                        contact@yadhukrishnan.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* BOTTOM INFO CARD */}
              <div className="bg-white rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                  Let's Create Together
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Whether you need stunning graphics, engaging video content, or creative visual solutions, I’m here to bring your vision to life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}
