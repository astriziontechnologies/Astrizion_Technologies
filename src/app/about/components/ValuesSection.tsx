'use client'

import { motion } from 'framer-motion'
import { Star, Shield, Zap, Users, RefreshCw, TrendingUp } from 'lucide-react'

const values = [
  { icon: Star, title: 'Excellence', description: 'We never settle for good enough. Every line of code, every design, every interaction is crafted to be exceptional.' },
  { icon: Shield, title: 'Integrity', description: "We say what we mean and deliver what we promise. Transparency is the foundation of every client relationship." },
  { icon: Zap, title: 'Innovation', description: 'We constantly explore new technologies and approaches to keep our clients ahead of the curve.' },
  { icon: Users, title: 'Collaboration', description: 'Great products are built together. We work as an extension of your team, not just a vendor.' },
  { icon: RefreshCw, title: 'Adaptability', description: 'Technology changes fast. We evolve faster — always learning, always improving.' },
  { icon: TrendingUp, title: 'Impact', description: "Success is measured by the results we create for our clients — growth, efficiency, and competitive advantage." },
]

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] pulse-dot" />
            Core Values
          </span>
          <h2 className="text-[clamp(1.875rem,5vw,3.125rem)] font-bold text-[#0F2854] mb-4">
            What We <span className="gradient-text">Stand For</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl border border-[#0F2854]/15 bg-white hover:border-[#0F2854]/35 hover:bg-[#0F2854]/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0F2854] flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[#0F2854] font-semibold text-base mb-1.5">{value.title}</h4>
                  <p className="text-[#0F2854]/70 text-base leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
