'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-[#1C4D8D]/40"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2854] via-[#0F2854] to-[#1C4D8D]" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-[300px] h-[200px] bg-[#4988C4]/10 blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-[#1C4D8D]/20 blur-[80px]" />
          {/* Top line accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-[#4988C4]/60 to-transparent" />

          <div className="relative z-10 py-12 sm:py-16 px-5 sm:px-10 lg:px-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4988C4]/30 bg-[#4988C4]/10 text-[#BDE8F5] text-xs font-medium tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#BDE8F5] pulse-dot" />
              Ready to Start?
            </motion.span>

            <h2 className="text-[clamp(1.625rem,4.5vw,3.125rem)] font-bold text-white mb-5 leading-tight">
              Let&apos;s Build Something<br />
              <span style={{ background: 'linear-gradient(135deg, #4988C4, #BDE8F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Extraordinary Together</span>
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto mb-10">
              Share your idea with us and we&apos;ll turn it into a product that makes an impact.
              Free consultation. No strings attached.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1C4D8D] to-[#4988C4] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#4988C4]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Get Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1C4D8D]/50 text-white/70 font-semibold rounded-xl hover:border-[#4988C4]/50 hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
