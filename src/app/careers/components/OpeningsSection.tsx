'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react'

const openings = [
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'Build scalable web applications using Next.js, Node.js, and PostgreSQL. You will work on client projects end-to-end.',
    requirements: ['3+ years of React/Next.js', 'Node.js & REST APIs', 'PostgreSQL or MongoDB', 'Git & CI/CD'],
  },
  {
    title: 'Mobile App Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'Develop high-quality mobile applications using React Native and Flutter for iOS and Android platforms.',
    requirements: ['2+ years React Native or Flutter', 'State management (Redux/Riverpod)', 'App Store deployment', 'REST API integration'],
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Data',
    type: 'Full-time',
    location: 'Remote',
    description: 'Design and deploy machine learning models and AI solutions integrated into client products.',
    requirements: ['Python & TensorFlow/PyTorch', 'LLM fine-tuning & prompting', 'FastAPI or Flask', 'Data preprocessing & analysis'],
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description: 'Drive growth through SEO, paid ads, content strategy, and performance analytics for our clients.',
    requirements: ['Google Ads & Meta Ads certified', 'SEO tools (SEMrush, Ahrefs)', 'Content strategy & copywriting', 'Analytics & reporting'],
  },
]

export default function OpeningsSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
            Open Positions
          </span>
          <h2 className="text-[clamp(1.625rem,4vw,2.5rem)] font-bold text-[#0F2854] mb-4">
            Current <span className="gradient-text">Openings</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-[#1C4D8D]/20 bg-white/60 hover:border-[#4988C4]/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-[#0F2854] font-bold text-lg">{job.title}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1C4D8D]/30 border border-[#1C4D8D]/50 text-[#4988C4] uppercase tracking-wider">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="flex items-center gap-1.5 text-[#0F2854]/40 text-xs">
                      <Clock size={12} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#0F2854]/40 text-xs">
                      <MapPin size={12} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#0F2854]/40 text-xs">
                      <Briefcase size={12} /> {job.department}
                    </span>
                  </div>
                  <p className="text-[#0F2854]/45 text-sm leading-relaxed mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req) => (
                      <span key={req} className="px-2.5 py-1 rounded-lg border border-[#1C4D8D]/25 bg-[#1C4D8D]/10 text-[#0F2854]/40 text-xs">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#apply"
                  className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#1C4D8D]/40 text-[#4988C4] text-sm font-medium hover:bg-[#1C4D8D]/20 hover:border-[#4988C4]/50 transition-all duration-200 group-hover:border-[#4988C4]/50"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
