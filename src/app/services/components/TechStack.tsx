'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    label: 'Frontend',
    items: ['Next.js', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Flutter'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel'],
  },
  {
    label: 'AI & Data',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Pandas', 'Scikit-learn'],
  },
]

export default function TechStack() {
  return (
    <section className="py-20 bg-[#95C9E0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
            Tech Stack
          </span>
          <h2 className="text-[clamp(1.625rem,4vw,2.5rem)] font-bold text-[#0F2854] mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-[#1C4D8D]/20 bg-white/60"
            >
              <h4 className="text-[#4988C4] font-semibold text-sm tracking-wider uppercase mb-4">{cat.label}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg border border-[#1C4D8D]/30 bg-[#1C4D8D]/10 text-[#0F2854]/60 text-xs font-medium hover:border-[#4988C4]/50 hover:text-[#0F2854] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
