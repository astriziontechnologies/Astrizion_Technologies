'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Rocket, Users, Clock, Code2, HeartHandshake } from 'lucide-react'
import Image from 'next/image'

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
    <section className="relative pt-14 pb-14 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column header: content left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-16">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] pulse-dot" />
              Why Astrizion
            </span>
            <h2 className="text-[clamp(1.875rem,5vw,3.125rem)] font-bold text-[#0F2854] leading-tight mb-4">
              The Partner You Actually Need
            </h2>
            <p className="text-[#0F2854] text-lg leading-relaxed mb-10">
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
                    <span className="text-[#0F2854]">{item.label}</span>
                    <span className="text-[#0F2854] font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-[#0F2854]/15 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-[#0F2854]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5 flex-shrink-0 relative"
          >
            {/* Decorative rings */}
            <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full border border-[#0F2854]/15 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-32 h-32 rounded-full border border-[#1C4D8D]/10 pointer-events-none" />
            {/* Decorative blur accent — bottom-left */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#BDE8F5]/30 blur-2xl pointer-events-none" />
            {/* Corner bracket — top-right */}
            <svg className="absolute top-0 right-0 w-8 h-8 text-[#0F2854]/25 pointer-events-none" viewBox="0 0 32 32" fill="none">
              <path d="M30 14 L30 2 L18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* Corner bracket — bottom-left */}
            <svg className="absolute bottom-0 left-0 w-8 h-8 text-[#0F2854]/25 pointer-events-none" viewBox="0 0 32 32" fill="none">
              <path d="M2 18 L2 30 L14 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#0F2854]/10 h-[400px] lg:h-[460px]">
              <Image
                src="/images/why-astrizion.png"
                alt="Why Astrizion"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0F2854]/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-[#0F2854]/15 bg-white hover:border-[#0F2854]/30 transition-colors duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0F2854] flex items-center justify-center mb-3 transition-colors">
                  <Icon size={20} className="text-white" />
                </div>
                <h4 className="text-[#0F2854] font-semibold text-base mb-1.5">{reason.title}</h4>
                <p className="text-[#0F2854] text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
