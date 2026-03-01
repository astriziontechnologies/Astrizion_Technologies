'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const words = ['Initiate.', 'Integrate.', 'Innovate.']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1C4D8D]/8 blur-[120px]" />
        {/* Accent orbs */}
        <div className="absolute top-20 right-[10%] w-[300px] h-[300px] rounded-full bg-[#1C4D8D]/10 blur-[80px] float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 left-[5%] w-[200px] h-[200px] rounded-full bg-[#4988C4]/10 blur-[60px] float" style={{ animationDelay: '3s' }} />

        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4988C4" stopOpacity="1" />
              <stop offset="100%" stopColor="#4988C4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <line x1="50%" y1="0" x2="0" y2="100%" stroke="url(#lineGrad)" strokeWidth="0.5" />
          <line x1="50%" y1="0" x2="100%" y2="100%" stroke="url(#lineGrad)" strokeWidth="0.5" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.5" />
        </svg>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#4988C4]"
            style={{
              left: `${10 + (i * 7.5) % 85}%`,
              top: `${15 + (i * 11) % 70}%`,
              opacity: 0.3 + (i % 3) * 0.15,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 backdrop-blur text-[#1C4D8D] text-xs font-medium tracking-widest uppercase mb-8 mt-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
          IT Solutions & Digital Transformation
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.05] mb-6"
        >
          <span className="text-[#0F2854]">We Build </span>
          <span className="gradient-text">Technology</span>
          <br />
          <span className="text-[#0F2854]">That </span>
          <span className="text-[#0F2854]/40">Drives Results</span>
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
                i === 1 ? 'text-[#4988C4]' : 'text-[#0F2854]/30'
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
          className="text-[#0F2854]/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
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
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1C4D8D] to-[#4988C4] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#4988C4]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 px-7 py-3.5 border border-[#1C4D8D]/50 text-[#0F2854]/70 font-semibold rounded-xl hover:border-[#4988C4]/70 hover:text-[#0F2854] hover:bg-[#1C4D8D]/10 transition-all duration-300"
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
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-[#0F2854]/35 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#0F2854]/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
