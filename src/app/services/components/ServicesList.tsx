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
    color: '#4988C4',
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
    color: '#1C4D8D',
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
    color: '#4988C4',
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
    color: '#1C4D8D',
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
    color: '#4988C4',
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
    color: '#1C4D8D',
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
    color: '#4988C4',
  },
]

export default function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((service, i) => {
          const Icon = service.icon
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-10 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon + number */}
              <div className="shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center border"
                  style={{
                    background: `${service.color}15`,
                    borderColor: `${service.color}35`,
                  }}
                >
                  <Icon size={32} style={{ color: service.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: service.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 max-w-[40px]" style={{ background: `${service.color}40` }} />
                  <span className="text-[#0F2854]/30 text-xs">{service.tagline}</span>
                </div>
                <h3 className="text-[clamp(1.375rem,3.5vw,1.875rem)] font-bold text-[#0F2854] mb-4">{service.title}</h3>
                <p className="text-[#0F2854]/45 leading-relaxed mb-6 max-w-xl">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-sm text-[#0F2854]/55">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: service.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
