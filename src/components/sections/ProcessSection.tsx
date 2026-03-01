'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We deep-dive into your business, goals, and challenges to understand what truly matters.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We design a technical roadmap with timelines, tech stack, and milestone checkpoints.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our engineers execute with precision — iterating fast, testing thoroughly, shipping cleanly.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy, monitor, and ensure everything runs smoothly from day one.',
  },
  {
    number: '05',
    title: 'Grow',
    description: 'Post-launch support, performance tracking, and continuous improvements to keep you ahead.',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative pt-14 pb-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] pulse-dot" />
            How We Work
          </span>
          <h2 className="text-[clamp(1.875rem,5vw,3.125rem)] font-bold text-[#0F2854] mb-4">
            Our <span className="text-[#0F2854]">Process</span>
          </h2>
          <p className="text-[#0F2854] text-lg max-w-xl mx-auto">
            A proven 5-step framework that turns your idea into a live, scalable product.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[#0F2854]/40" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center group"
              >
                {/* Number bubble */}
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-[#0F2854] group-hover:bg-[#0F2854]/90 transition-all duration-500" />
                  {i % 2 !== 0 && <div className="absolute inset-0.5 rounded-full bg-white" />}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`font-bold text-lg transition-colors duration-300 ${i % 2 === 0 ? 'text-white' : 'text-[#0F2854] group-hover:text-[#0F2854]/80'}`}>
                      {step.number}
                    </span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-[#0F2854]/0 group-hover:bg-[#0F2854]/8 transition-all duration-500 blur-sm" />
                </div>

                <h4 className="text-[#0F2854] font-semibold text-base mb-2">{step.title}</h4>
                <p className="text-[#0F2854] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
