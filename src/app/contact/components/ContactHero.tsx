'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative pt-14 pb-16 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(to right, #0F2854 1px, transparent 1px), linear-gradient(to bottom, #0F2854 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 lg:-top-32 lg:-right-32 w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px] opacity-[0.18]" viewBox="0 0 520 520" fill="none"><circle cx="260" cy="260" r="240" stroke="#0F2854" strokeWidth="2" /><circle cx="260" cy="260" r="190" stroke="#1C4D8D" strokeWidth="1.5" /><circle cx="260" cy="260" r="140" stroke="#4988C4" strokeWidth="1" /></svg>
        <svg className="absolute -bottom-10 -left-10 sm:-bottom-16 sm:-left-16 lg:-bottom-20 lg:-left-20 w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[360px] lg:h-[360px] opacity-[0.15]" viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="165" stroke="#0F2854" strokeWidth="2" /><circle cx="180" cy="180" r="120" stroke="#1C4D8D" strokeWidth="1.5" /></svg>
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 sm:h-36 lg:h-48 opacity-50" viewBox="0 0 1 192" fill="none" preserveAspectRatio="none"><line x1="0.5" y1="0" x2="0.5" y2="192" stroke="url(#lineGradContact)" strokeWidth="1" /><defs><linearGradient id="lineGradContact" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0F2854" stopOpacity="0" /><stop offset="50%" stopColor="#0F2854" stopOpacity="1" /><stop offset="100%" stopColor="#0F2854" stopOpacity="0" /></linearGradient></defs></svg>
        <svg className="absolute top-[18%] left-[4%] sm:left-[8%] w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-[0.30]" viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="22" height="22" rx="3" stroke="#0F2854" strokeWidth="1.5" /></svg>
        <svg className="absolute top-[30%] right-[4%] sm:right-[9%] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 opacity-[0.25]" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2" stroke="#1C4D8D" strokeWidth="1.5" /></svg>
        <svg className="absolute bottom-[22%] left-[6%] sm:left-[14%] w-4 h-4 sm:w-5 sm:h-5 opacity-[0.22]" viewBox="0 0 12 12" fill="none"><rect x="0.5" y="0.5" width="11" height="11" rx="2" stroke="#4988C4" strokeWidth="1.5" /></svg>
        <svg className="hidden sm:block absolute top-[12%] right-[18%] w-7 h-7 lg:w-10 lg:h-10 opacity-[0.20]" viewBox="0 0 32 32" fill="none"><line x1="0" y1="16" x2="32" y2="16" stroke="#0F2854" strokeWidth="1.5" /><line x1="16" y1="0" x2="16" y2="32" stroke="#0F2854" strokeWidth="1.5" /></svg>
        <svg className="hidden sm:block absolute bottom-[30%] right-[6%] w-6 h-6 lg:w-8 lg:h-8 opacity-[0.18]" viewBox="0 0 24 24" fill="none"><line x1="0" y1="12" x2="24" y2="12" stroke="#1C4D8D" strokeWidth="1.5" /><line x1="12" y1="0" x2="12" y2="24" stroke="#1C4D8D" strokeWidth="1.5" /></svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0F2854]/40 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] pulse-dot" />
          Get In Touch
        </motion.span>

        <motion.h1
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2rem,6vw,3.75rem)] font-bold text-[#0F2854] mb-5 leading-tight"
        >
          Let&apos;s Start a <span className="gradient-text">Conversation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-[#0F2854] text-lg max-w-xl mx-auto"
        >
          Have a project in mind? We&apos;d love to hear about it.
          Fill out the form and we&apos;ll get back to you within 24 hours.
        </motion.p>
      </div>
    </section>
  )
}
