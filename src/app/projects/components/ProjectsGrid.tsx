'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const categories = ['All', 'Web Dev', 'Mobile', 'AI/ML', 'Automation', 'Marketing']

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Dev',
    description: 'A full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-[#0F2854] to-[#1C4D8D]',
    accentColor: '#4988C4',
  },
  {
    title: 'AI Document Analyzer',
    category: 'AI/ML',
    description: 'Intelligent document processing system that extracts, classifies, and summarizes content using LLMs.',
    tech: ['Python', 'OpenAI', 'FastAPI', 'React'],
    gradient: 'from-[#1C4D8D] to-[#4988C4]',
    accentColor: '#BDE8F5',
  },
  {
    title: 'Delivery Tracking App',
    category: 'Mobile',
    description: 'Real-time delivery tracking mobile app with GPS integration and push notifications for drivers and customers.',
    tech: ['React Native', 'Node.js', 'Google Maps API'],
    gradient: 'from-[#0F2854] to-[#4988C4]',
    accentColor: '#4988C4',
  },
  {
    title: 'Sales Pipeline Automation',
    category: 'Automation',
    description: 'Automated CRM pipeline that syncs leads, sends follow-up emails, and generates reports on autopilot.',
    tech: ['Python', 'Zapier', 'HubSpot API', 'PostgreSQL'],
    gradient: 'from-[#1C4D8D] to-[#0F2854]',
    accentColor: '#BDE8F5',
  },
  {
    title: 'Real Estate Web Portal',
    category: 'Web Dev',
    description: 'Feature-rich real estate listing portal with advanced search, 3D tours, and mortgage calculator.',
    tech: ['Next.js', 'Supabase', 'Mapbox', 'Stripe'],
    gradient: 'from-[#4988C4] to-[#0F2854]',
    accentColor: '#4988C4',
  },
  {
    title: 'Market Data Scraper',
    category: 'Automation',
    description: 'Scalable web scraping system collecting pricing data from 50+ competitor sites for market intelligence.',
    tech: ['Python', 'Playwright', 'Redis', 'PostgreSQL'],
    gradient: 'from-[#0F2854] to-[#1C4D8D]',
    accentColor: '#4988C4',
  },
  {
    title: 'SEO Growth Campaign',
    category: 'Marketing',
    description: 'Comprehensive SEO and content strategy that drove 300% organic traffic growth in 6 months.',
    tech: ['SEMrush', 'Ahrefs', 'Google Analytics', 'HubSpot'],
    gradient: 'from-[#1C4D8D] to-[#BDE8F5]/30',
    accentColor: '#BDE8F5',
  },
  {
    title: 'Inventory Management AI',
    category: 'AI/ML',
    description: 'Predictive inventory management system that uses ML to forecast demand and automate restocking.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'React'],
    gradient: 'from-[#0F2854] to-[#4988C4]',
    accentColor: '#4988C4',
  },
]

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1C4D8D] text-white border border-[#4988C4]/50'
                  : 'border border-[#1C4D8D]/30 text-[#0F2854]/50 hover:text-[#0F2854] hover:border-[#1C4D8D]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group relative rounded-2xl border border-[#1C4D8D]/20 bg-white/70 overflow-hidden hover:border-[#4988C4]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top gradient visual */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  {/* Category badge */}
                  <span
                    className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase"
                    style={{
                      background: `${project.accentColor}20`,
                      border: `1px solid ${project.accentColor}40`,
                      color: project.accentColor,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-[#0F2854] font-semibold text-base mb-2">{project.title}</h3>
                  <p className="text-[#0F2854]/40 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] bg-[#1C4D8D]/20 border border-[#1C4D8D]/30 text-[#0F2854]/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex items-center gap-1.5 text-xs text-[#4988C4] hover:text-[#1C4D8D] transition-colors">
                      <ExternalLink size={13} /> View Project
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-[#0F2854]/35 hover:text-[#0F2854]/70 transition-colors">
                      <Github size={13} /> Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#0F2854]/30 py-20">No projects in this category yet.</p>
        )}
      </div>
    </section>
  )
}
