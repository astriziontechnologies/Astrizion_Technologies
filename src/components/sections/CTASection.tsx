'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex-shrink-0 relative"
          >
            {/* Decorative ring behind image */}
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full border border-[#0F2854]/15 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-32 h-32 rounded-full border border-[#1C4D8D]/10 pointer-events-none" />
            {/* Decorative dot accent — bottom-right */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#BDE8F5]/30 blur-2xl pointer-events-none" />
            {/* Corner bracket — top-left */}
            <svg className="absolute top-0 left-0 w-8 h-8 text-[#0F2854]/25 pointer-events-none" viewBox="0 0 32 32" fill="none">
              <path d="M2 14 L2 2 L14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* Corner bracket — bottom-right */}
            <svg className="absolute bottom-0 right-0 w-8 h-8 text-[#0F2854]/25 pointer-events-none" viewBox="0 0 32 32" fill="none">
              <path d="M30 18 L30 30 L18 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#0F2854]/10 h-[440px] lg:h-[500px]">
              <Image
                src="/images/ready-to-start.png"
                alt="Ready to Start"
                fill
                className="object-cover"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0F2854]/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] pulse-dot" />
              Ready to Start?
            </motion.span>

            <h2 className="text-[clamp(1.625rem,4.5vw,3.125rem)] font-bold text-[#0F2854] mb-5 leading-tight">
              Let&apos;s Build Something<br />
              Extraordinary Together
            </h2>
            <p className="text-[#0F2854] text-lg mb-10">
              Share your idea with us and we&apos;ll turn it into a product that makes an impact.
              Free consultation. No strings attached.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0F2854] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#0F2854]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Get Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#0F2854] text-[#0F2854] font-semibold rounded-xl hover:bg-[#0F2854] hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
