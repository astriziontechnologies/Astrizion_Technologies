'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Brain, Zap, Lightbulb, TrendingUp, Search } from 'lucide-react'

const services = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Web Development',
    tagline: 'Modern, scalable web applications',
    description:
      'We build high-performance web applications using the latest technologies. From landing pages to complex enterprise platforms, we craft digital experiences that engage users and drive conversions.',
    features: [
      'Next.js / React / Vue.js frontends',
      'Node.js / Python / Django backends',
      'REST & GraphQL APIs',
      'E-commerce & SaaS platforms',
      'CMS integration (Sanity, Contentful)',
      'Performance optimization & SEO',
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'Apps that users love',
    description:
      'We develop native and cross-platform mobile applications that deliver exceptional user experiences. Whether iOS, Android, or both — we build apps that your customers will use every day.',
    features: [
      'React Native & Flutter development',
      'Native iOS (Swift) & Android (Kotlin)',
      'App Store & Play Store deployment',
      'Push notifications & offline support',
      'Third-party API integrations',
      'App maintenance & updates',
    ],
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI / ML Solutions',
    tagline: 'Intelligence built into your product',
    description:
      'We develop intelligent systems that learn from data and make smart decisions. From predictive analytics to NLP and computer vision, we bring AI capabilities to your business.',
    features: [
      'Machine learning model development',
      'Natural Language Processing (NLP)',
      'Computer vision solutions',
      'Predictive analytics & forecasting',
      'LLM integration (GPT, Claude, etc.)',
      'AI-powered chatbots & agents',
    ],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automations',
    tagline: 'Work smarter, not harder',
    description:
      'We automate repetitive workflows, data pipelines, and business processes — freeing your team to focus on what matters. From simple scripts to complex multi-system integrations.',
    features: [
      'Business process automation (BPA)',
      'RPA (Robotic Process Automation)',
      'API integrations & webhooks',
      'Scheduled jobs & data pipelines',
      'CRM, ERP & tool integrations',
      'Email, Slack & notification automation',
    ],
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'IT Consulting',
    tagline: 'Strategy that drives results',
    description:
      'We help businesses make smarter technology decisions. Our consultants analyze your current setup, identify gaps, and create a roadmap that aligns technology with your business goals.',
    features: [
      'Technology stack assessment',
      'Digital transformation strategy',
      'Cloud migration planning',
      'Security audits & compliance',
      'Architecture review & optimization',
      'Team training & upskilling',
    ],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    tagline: 'Grow your digital presence',
    description:
      'Data-driven digital marketing campaigns that increase visibility, generate quality leads, and maximize ROI. We combine creativity with analytics to deliver measurable results.',
    features: [
      'SEO & content marketing',
      'Google Ads & Meta Ads management',
      'Social media strategy & management',
      'Email marketing campaigns',
      'Conversion rate optimization (CRO)',
      'Analytics & performance reporting',
    ],
  },
  {
    id: 'scraping',
    icon: Search,
    title: 'Web Scraping',
    tagline: 'Data extraction at scale',
    description:
      'We build robust, scalable web scraping solutions that extract the data you need from any website. Clean, structured, and delivered on schedule — powering your business intelligence.',
    features: [
      'Custom scraper development',
      'Large-scale data extraction',
      'Dynamic JavaScript rendering',
      'Data cleaning & transformation',
      'Scheduled & real-time scraping',
      'Proxy management & anti-bot bypass',
    ],
  },
]

export default function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, i) => {
          const Icon = service.icon
          const isEven = i % 2 === 0

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Divider — skip before first */}
              {i !== 0 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0F2854]/15 to-transparent my-16" />
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* ── Content column ── */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  {/* Number + tagline */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold tracking-widest uppercase text-[#0F2854]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-8 bg-[#0F2854]/40" />
                    <span className="text-[#0F2854]/50 text-sm">{service.tagline}</span>
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-[#0F2854]">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#0F2854]/70 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* ── Features column ── */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="bg-[#0F2854]/[0.04] border border-[#0F2854]/10 rounded-2xl p-6 sm:p-8">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-[#0F2854]">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-[#0F2854] flex items-center justify-center">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
