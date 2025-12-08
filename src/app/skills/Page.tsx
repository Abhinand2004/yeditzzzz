'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Design & Branding',
    highlight: 'Pixel-perfect visuals',
    skills: ['Brand Identity', 'Poster Design', 'Social Media Creatives', 'Typography', 'Layout Design'],
  },
  {
    label: 'Video & Motion',
    highlight: 'Story in every frame',
    skills: ['Video Editing', 'Motion Graphics', 'Reels / Shorts Editing', 'Transition Design', 'Cinematic Cuts'],
  },
  {
    label: 'Tools',
    highlight: 'Right tool, right frame',
    skills: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Figma', 'DaVinci Resolve'],
  },
]

const levels = [
  { label: 'Design', value: 92 },
  { label: 'Video Editing', value: 95 },
  { label: 'Motion Graphics', value: 88 },
  { label: 'Content Sense', value: 90 },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black text-white py-16 px-4 sm:px-6 lg:px-12"
    >
      {/* background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top,_#1f2937_0,_transparent_55%),linear-gradient(to_right,_rgba(31,41,55,0.7)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(31,41,55,0.7)_1px,_transparent_1px)] [background-size:100%_100%,80px_80px,80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Skills & Stack
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Visual <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Craft</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-400">
              From bold posters to fluid motion graphics, a hybrid skillset that keeps design, video,
              and animation speaking the same visual language.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="mt-3 inline-flex max-w-xs items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs sm:text-sm backdrop-blur"
          >
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 flex items-center justify-center text-[0.65rem] font-semibold">
              4K
            </div>
            <div className="space-y-0.5">
              <p className="font-medium text-white">Designed for screens, not slides.</p>
              <p className="text-[0.7rem] text-gray-400">
                Social-ready visuals, fast turnarounds, export-ready files.
              </p>
            </div>
          </motion.div>
        </div>

        {/* main layout */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* left: skill groups */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {skillGroups.map((group, idx) => (
              <div
                key={group.label}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent p-4 sm:p-5"
              >
                {/* accent strip */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-fuchsia-500 via-purple-400 to-cyan-400" />

                {/* corner glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-2xl" />

                <div className="ml-2 sm:ml-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-400">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </p>
                      <h3 className="mt-1 text-base sm:text-lg font-semibold">
                        {group.label}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] text-gray-300">
                      {group.highlight}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[0.7rem] sm:text-xs text-gray-200 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* right: levels / meter card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="relative flex flex-col gap-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-black to-cyan-500/10 p-5 sm:p-6">
              {/* glossy overlay */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-40" />

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-300">
                    Visual Strength Map
                  </p>
                  <h3 className="mt-1 text-lg sm:text-xl font-semibold">
                    Design x Edit x Motion
                  </h3>
                  <p className="mt-2 text-[0.8rem] text-gray-200">
                    A balanced mix of static design, pacing, and movement that keeps
                    content scroll-stopping and on-brand.
                  </p>
                </div>
                <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-black/40 text-[0.6rem] leading-tight">
                  <span className="block text-[0.65rem] text-gray-300">
                    Graphic<br />Designer<br />+ Editor
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {levels.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-[0.75rem] text-gray-200">
                      <span>{item.label}</span>
                      <span className="font-medium text-gray-100">{item.value}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem] text-gray-300">
                <span className="rounded-full bg-black/40 px-3 py-1 border border-fuchsia-500/40">
                  Social content specialist
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 border border-cyan-500/40">
                  Reel / short-form focused
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 border border-purple-500/40">
                  Timeline, keyframes & beats
                </span>
              </div>
            </div>

            {/* small bottom note card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[0.75rem] text-gray-300 backdrop-blur">
              <p>
                Need a specific tool or workflow? This stack can adapt to{' '}
                <span className="text-white font-medium">
                  brand kits, content calendars, and platform-specific formats
                </span>{' '}
                without breaking the visual style.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
