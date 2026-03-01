'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const words = ['Initiate.', 'Integrate.', 'Innovate.']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">


      {/* Background: dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0F2854 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Background: decorative SVG rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large ring — top-right */}
        <svg
          className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 lg:-top-32 lg:-right-32 w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px] opacity-[0.18]"
          viewBox="0 0 520 520" fill="none"
        >
          <circle cx="260" cy="260" r="240" stroke="#0F2854" strokeWidth="2" />
          <circle cx="260" cy="260" r="190" stroke="#1C4D8D" strokeWidth="1.5" />
          <circle cx="260" cy="260" r="140" stroke="#4988C4" strokeWidth="1" />
        </svg>
        {/* Medium ring — bottom-left */}
        <svg
          className="absolute -bottom-10 -left-10 sm:-bottom-16 sm:-left-16 lg:-bottom-20 lg:-left-20 w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[360px] lg:h-[360px] opacity-[0.15]"
          viewBox="0 0 360 360" fill="none"
        >
          <circle cx="180" cy="180" r="165" stroke="#0F2854" strokeWidth="2" />
          <circle cx="180" cy="180" r="120" stroke="#1C4D8D" strokeWidth="1.5" />
        </svg>
        {/* Thin accent line — center top */}
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 sm:h-36 lg:h-48 opacity-50" viewBox="0 0 1 192" fill="none" preserveAspectRatio="none">
          <line x1="0.5" y1="0" x2="0.5" y2="192" stroke="url(#lineGrad)" strokeWidth="1" />
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0F2854" stopOpacity="0" />
              <stop offset="50%" stopColor="#0F2854" stopOpacity="1" />
              <stop offset="100%" stopColor="#0F2854" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Floating small squares */}
        <svg className="absolute top-[18%] left-[4%] sm:left-[8%] w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-[0.30]" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="22" height="22" rx="3" stroke="#0F2854" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[30%] right-[4%] sm:right-[9%] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 opacity-[0.25]" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" stroke="#1C4D8D" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-[22%] left-[6%] sm:left-[14%] w-4 h-4 sm:w-5 sm:h-5 opacity-[0.22]" viewBox="0 0 12 12" fill="none">
          <rect x="0.5" y="0.5" width="11" height="11" rx="2" stroke="#4988C4" strokeWidth="1.5" />
        </svg>
        {/* Cross marks — hidden on mobile to avoid clutter */}
        <svg className="hidden sm:block absolute top-[12%] right-[18%] w-7 h-7 lg:w-10 lg:h-10 opacity-[0.20]" viewBox="0 0 32 32" fill="none">
          <line x1="0" y1="16" x2="32" y2="16" stroke="#0F2854" strokeWidth="1.5" />
          <line x1="16" y1="0" x2="16" y2="32" stroke="#0F2854" strokeWidth="1.5" />
        </svg>
        <svg className="hidden sm:block absolute bottom-[30%] right-[6%] w-6 h-6 lg:w-8 lg:h-8 opacity-[0.18]" viewBox="0 0 24 24" fill="none">
          <line x1="0" y1="12" x2="24" y2="12" stroke="#1C4D8D" strokeWidth="1.5" />
          <line x1="12" y1="0" x2="12" y2="24" stroke="#1C4D8D" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Background: subtle bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0F2854]/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 backdrop-blur text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-8 mt-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] pulse-dot" />
          IT Solutions & Digital Transformation
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.25rem,6.5vw,4.75rem)] font-bold leading-[1.05] mb-6"
        >
          <span className="text-[#0F2854]">We Build </span>
          <span className="text-[#0F2854]">Technology</span>
          <br />
          <span className="text-[#0F2854]">That </span>
          <span className="text-[#0F2854]">Drives Results</span>
        </motion.h1>

        {/* Tagline cycling words */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className={`text-lg sm:text-xl font-semibold ${
                i === 1 ? 'text-[#0F2854]' : 'text-[#0F2854]/60'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#0F2854] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From cutting-edge web platforms to intelligent AI systems — we craft digital solutions
          that scale your business and outpace the competition.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0F2854] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#0F2854]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 px-7 py-3.5 border border-[#0F2854]/50 text-[#0F2854]/70 font-semibold rounded-xl hover:border-[#0F2854]/70 hover:text-[#0F2854] hover:bg-[#0F2854]/8 transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto w-full"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '7+', label: 'Core Services' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#0F2854] mb-1">{stat.value}</div>
              <div className="text-[#0F2854] text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
