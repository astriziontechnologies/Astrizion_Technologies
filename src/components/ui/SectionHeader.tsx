'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ tag, title, highlight, description, centered = true }: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      {tag && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2854] leading-tight">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {description && (
        <p className={`mt-4 text-[#0F2854]/50 text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
