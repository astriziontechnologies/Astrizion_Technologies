'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'

const team = [
  { name: 'Coming Soon', role: 'CEO & Founder', initials: 'AT' },
  { name: 'Coming Soon', role: 'CTO', initials: 'AT' },
  { name: 'Coming Soon', role: 'Lead Designer', initials: 'AT' },
  { name: 'Coming Soon', role: 'Lead Engineer', initials: 'AT' },
]

export default function TeamSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
            The Team
          </span>
          <h2 className="text-[clamp(1.875rem,5vw,3.125rem)] font-bold text-[#0F2854] mb-4">
            The Minds Behind <span className="gradient-text">Astrizion</span>
          </h2>
          <p className="text-[#0F2854]/45 text-lg max-w-xl mx-auto">
            A team of passionate experts dedicated to building technology that matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-4 sm:p-6 rounded-2xl border border-[#1C4D8D]/20 bg-white/50 hover:border-[#4988C4]/35 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#1C4D8D] to-[#0F2854] flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-[#4988C4]/20 transition-all duration-300">
                <span className="text-white font-bold text-base sm:text-xl">{member.initials}</span>
              </div>
              <h4 className="text-[#0F2854] font-semibold text-sm mb-1">{member.name}</h4>
              <p className="text-[#4988C4] text-xs mb-4">{member.role}</p>
              <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="w-7 h-7 rounded-lg bg-[#1C4D8D]/20 flex items-center justify-center text-[#0F2854]/50 hover:text-[#0F2854] transition-colors">
                  <Linkedin size={13} />
                </a>
                <a href="#" className="w-7 h-7 rounded-lg bg-[#1C4D8D]/20 flex items-center justify-center text-[#0F2854]/50 hover:text-[#0F2854] transition-colors">
                  <Twitter size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#0F2854]/25 text-sm mt-8"
        >
          Team profiles coming soon — we are growing fast!
        </motion.p>
      </div>
    </section>
  )
}
