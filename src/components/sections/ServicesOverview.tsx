'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, Smartphone, Brain, Zap, Lightbulb, TrendingUp, Search, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Scalable, fast and modern web applications built with the latest technologies.',
    color: '#4988C4',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
    color: '#1C4D8D',
  },
  {
    icon: Brain,
    title: 'AI / ML Solutions',
    description: 'Intelligent systems powered by machine learning that automate and predict.',
    color: '#4988C4',
  },
  {
    icon: Zap,
    title: 'Automations',
    description: 'End-to-end workflow automation that eliminates repetitive tasks and saves time.',
    color: '#BDE8F5',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to align your IT infrastructure with your goals.',
    color: '#4988C4',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that increase visibility, leads and conversions.',
    color: '#1C4D8D',
  },
  {
    icon: Search,
    title: 'Web Scraping',
    description: 'Accurate and scalable data extraction from any website for your business intelligence.',
    color: '#4988C4',
  },
]

export default function ServicesOverview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1C4D8D]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
            What We Do
          </span>
          <h2 className="text-[clamp(1.875rem,5vw,3.125rem)] font-bold text-[#0F2854] mb-4">
            Services Built for <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-[#0F2854]/45 text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions tailored to your business.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl border border-[#1C4D8D]/20 bg-white/60 backdrop-blur hover:border-[#4988C4]/40 hover:bg-[#1C4D8D]/10 transition-all duration-300 cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4988C4]/0 to-[#1C4D8D]/0 group-hover:from-[#4988C4]/5 group-hover:to-[#1C4D8D]/10 transition-all duration-300" />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                >
                  <Icon size={20} style={{ color: service.color }} />
                </div>
                <h3 className="text-[#0F2854] font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-[#0F2854]/40 text-sm leading-relaxed">{service.description}</p>

                {/* Arrow on hover */}
                <div className="mt-4 flex items-center gap-1 text-[#4988C4] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1C4D8D]/50 text-[#0F2854]/70 rounded-xl hover:border-[#4988C4]/60 hover:text-[#0F2854] hover:bg-[#1C4D8D]/15 transition-all duration-300 text-sm font-medium"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
