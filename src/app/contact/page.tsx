'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaEnvelope, FaPaperPlane, FaCheck } from 'react-icons/fa'

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
    <main className="min-h-screen bg-black pt-24 relative overflow-hidden">

      {/* THEME BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 z-[0]">
        <div className="absolute -top-40 left-0 h-80 w-80 bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_top,_#ffffff22_0,_transparent_60%),linear-gradient(to_right,_#ffffff0a_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff0a_1px,_transparent_1px)] [background-size:100%_100%,90px_90px,90px_90px]" />
      </div>

      <section className="relative z-[5] pb-28 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Let's Connect
            </h1>

            <div className="w-24 h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 mt-5 mb-6 rounded-full" />

            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Share your ideas, projects, or collaborations. I’ll respond as fast as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* FORM CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Glow corner */}
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-fuchsia-500/20 blur-3xl rounded-full" />

              <h2 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <FaCheck className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    I’ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* NAME */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-purple-400 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-purple-400 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm resize-none focus:border-purple-400 transition-all"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 text-black py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(236,72,153,0.4)]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-gray-200 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              {/* SOCIAL CARD */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-cyan-500/20 blur-3xl rounded-full" />

                <h2 className="text-2xl font-semibold text-white mb-6">
                  Connect With Me
                </h2>

                <div className="space-y-4">

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com/yedits"
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-black/60 rounded-xl border border-white/10 hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                      <FaInstagram className="text-lg" />
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
                    className="flex items-center gap-4 p-4 bg-black/60 rounded-xl border border-white/10 hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                      <FaEnvelope className="text-lg" />
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

              {/* BOTTOM CARD */}
              <div className="bg-gradient-to-br from-white/95 to-white/90 shadow-xl rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Let's Create Something Bold
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Need unique graphics, cinematic edits, or animated visuals?
                  I’ll bring your ideas to life with clean design and strong storytelling.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
