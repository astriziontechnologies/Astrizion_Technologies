'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Compass } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with innovative, scalable, and reliable technology solutions that solve real-world problems and drive measurable growth.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted technology partner for businesses across the globe — known for quality, integrity, and transformative impact.',
  },
  {
    icon: Compass,
    title: 'Our Approach',
    description:
      'We initiate with deep understanding, integrate the best technologies, and innovate relentlessly to deliver solutions that stand the test of time.',
  },
]

export default function MissionSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative p-8 rounded-2xl border border-[#0F2854]/15 bg-white overflow-hidden group hover:border-[#0F2854]/35 hover:bg-[#0F2854]/5 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#0F2854]/5 rounded-full blur-[60px] group-hover:bg-[#0F2854]/8 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2854] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-[#0F2854] font-bold text-xl mb-3">{pillar.title}</h3>
                  <p className="text-[#0F2854]/70 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] pulse-dot" />
              Our Story
            </span>
            <h2 className="text-[clamp(1.625rem,4vw,2.5rem)] font-bold text-[#0F2854] mb-5 leading-tight">
              Built with Purpose,<br />
              <span className="gradient-text">Driven by Impact</span>
            </h2>
            <div className="space-y-4 text-[#0F2854]/70 leading-relaxed">
              <p>
                Astrizion Technologies was founded with a simple belief — great technology should be accessible to every business, regardless of size. We saw a gap between what businesses needed and what they were getting from traditional IT vendors.
              </p>
              <p>
                So we built a team that blends engineering excellence with real business understanding. Today, we serve clients across industries, delivering solutions from intelligent AI systems to high-converting digital marketing campaigns.
              </p>
              <p>
                Our name reflects our ambition — reaching for the stars while staying grounded in results.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: '50+', label: 'Projects Delivered', desc: 'Across industries worldwide' },
              { value: '30+', label: 'Happy Clients', desc: 'Long-term partnerships' },
              { value: '7+', label: 'Core Services', desc: 'End-to-end solutions' },
              { value: '99%', label: 'Satisfaction Rate', desc: 'Verified by clients' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-xl border border-[#0F2854]/15 bg-white hover:border-[#0F2854]/35 transition-colors group"
              >
                <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-[#0F2854] font-medium text-base mb-1">{stat.label}</div>
                <div className="text-[#0F2854]/50 text-sm">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
