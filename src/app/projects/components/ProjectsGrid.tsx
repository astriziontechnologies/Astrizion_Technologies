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
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#0F2854] font-bold py-20 text-lg">We're Building Something Great — Stay Tuned!</h2>
      </div>
    </section>
  )
}
