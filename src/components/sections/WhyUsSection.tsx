'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Rocket, Users, Clock, Code2, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: Rocket,
    title: 'Rapid Delivery',
    description: 'We ship fast without compromising quality. Agile process keeps your project on schedule.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Scalable, maintainable, and well-documented code that grows with your business.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description: 'Security is built into every layer — from architecture to deployment.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description: 'Your vision drives every decision. We are partners in your success, not just vendors.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support ensures your systems are always up and running.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term Partnership',
    description: 'We build relationships, not just products. Your growth is our success metric.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#1C4D8D]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
              Why Astrizion
            </span>
            <h2 className="text-[clamp(1.875rem,5vw,3.125rem)] font-bold text-[#0F2854] leading-tight mb-6">
              The Partner You<br />
              <span className="gradient-text">Actually Need</span>
            </h2>
            <p className="text-[#0F2854]/45 text-lg leading-relaxed mb-8">
              We don&apos;t just write code — we solve problems. Our team combines deep technical expertise
              with business acumen to deliver solutions that truly move the needle.
            </p>

            {/* Progress bars */}
            <div className="space-y-4">
              {[
                { label: 'Client Satisfaction', value: 99 },
                { label: 'On-Time Delivery', value: 95 },
                { label: 'Project Success Rate', value: 98 },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#0F2854]/60">{item.label}</span>
                    <span className="text-[#4988C4] font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-[#1C4D8D]/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#0F2854] to-[#4988C4]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-xl border border-[#1C4D8D]/20 bg-white/50 hover:border-[#4988C4]/30 transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1C4D8D]/20 flex items-center justify-center mb-3 group-hover:bg-[#1C4D8D]/20 transition-colors">
                    <Icon size={17} className="text-[#4988C4]" />
                  </div>
                  <h4 className="text-[#0F2854] font-semibold text-sm mb-1.5">{reason.title}</h4>
                  <p className="text-[#0F2854]/35 text-xs leading-relaxed">{reason.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
