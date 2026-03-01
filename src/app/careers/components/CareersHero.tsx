'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const perks = [
  'Remote-first culture',
  'Competitive pay',
  'Growth opportunities',
  'Collaborative team',
  'Latest tech stack',
  'Flexible hours',
]

export default function CareersHero() {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#1C4D8D]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
          Join Our Team
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2rem,6vw,3.75rem)] font-bold text-[#0F2854] mb-6 leading-tight"
        >
          Build the <span className="gradient-text">Future</span><br />
          With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-[#0F2854]/50 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We are always looking for talented individuals who are passionate about technology
          and want to make a real impact. Come grow with us.
        </motion.p>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {perks.map((perk, i) => (
            <motion.span
              key={perk}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1C4D8D]/30 bg-[#1C4D8D]/10 text-[#0F2854]/55 text-xs"
            >
              <Heart size={10} className="text-[#4988C4]" />
              {perk}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
