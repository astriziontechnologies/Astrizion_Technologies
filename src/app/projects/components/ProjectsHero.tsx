'use client'

import { motion } from 'framer-motion'

export default function ProjectsHero() {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#1C4D8D]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
          Our Work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2rem,6vw,3.75rem)] font-bold text-[#0F2854] mb-6 leading-tight"
        >
          Projects That <span className="gradient-text">Speak</span><br />
          for Themselves
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-[#0F2854]/50 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A showcase of the solutions we have built — from web platforms to AI systems.
          Each project reflects our commitment to quality and impact.
        </motion.p>
      </div>
    </section>
  )
}
