'use client'

import { useState } from 'react'

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqs = [
    {
      q: 'What services does Astrizion Technologies offer?',
      a: 'Astrizion Technologies offers seven core IT services: Web Development, Mobile App Development, AI/ML Solutions, Business Process Automation, IT Consulting, Digital Marketing, and Web Scraping. We provide end-to-end solutions from strategy and design to development, deployment, and maintenance.',
    },
    {
      q: 'How much does it cost to build a website with Astrizion Technologies?',
      a: 'Website development pricing varies based on complexity, features, and timeline. A basic business website typically starts at an affordable range, while complex e-commerce platforms or SaaS applications are priced based on scope. Contact us at +91 9342436069 for a free quote tailored to your requirements.',
    },
    {
      q: 'Does Astrizion Technologies build mobile apps for both iOS and Android?',
      a: 'Yes. We develop mobile applications for both iOS and Android platforms using React Native and Flutter for cross-platform development, as well as native development using Swift (iOS) and Kotlin (Android). Our apps are deployed to the App Store and Google Play Store.',
    },
    {
      q: 'Can Astrizion Technologies integrate AI into an existing product?',
      a: 'Absolutely. We specialize in integrating AI capabilities — including LLMs (GPT, Claude), NLP, computer vision, and predictive analytics — into existing web and mobile applications. We assess your current architecture and recommend the best integration approach.',
    },
    {
      q: 'What technologies does Astrizion Technologies use?',
      a: 'Our tech stack includes Next.js, React, Vue.js, TypeScript, and Tailwind CSS for frontend; Node.js, Python, Django, and FastAPI for backend; PostgreSQL, MongoDB for databases; AWS, GCP, Docker, and Kubernetes for cloud and DevOps; and TensorFlow, PyTorch, OpenAI, and LangChain for AI/ML.',
    },
    {
      q: 'Does Astrizion Technologies work with international clients?',
      a: 'Yes. While we are headquartered in Komarapalayam, Tamil Nadu, India, we work with clients across India and internationally — including the US, UK, UAE, Singapore, and Australia. We operate as a remote-first company with flexible collaboration across time zones.',
    },
    {
      q: 'How long does it take to complete a web development project?',
      a: 'Project timelines depend on scope and complexity. A simple business website can be completed in 2–4 weeks. A medium-complexity web application typically takes 6–12 weeks. Large-scale platforms with custom features may take 3–6 months. We provide a detailed timeline estimate before starting any project.',
    },
    {
      q: 'What is the process to get started with Astrizion Technologies?',
      a: 'Getting started is simple: (1) Contact us via our contact form or call +91 9342436069. (2) We schedule a free 30-minute discovery call to understand your requirements. (3) We send you a detailed proposal with timeline and pricing. (4) Once approved, we begin development with regular updates throughout the project.',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F2854]/30 bg-[#0F2854]/8 text-[#0F2854] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854]" />
            FAQ
          </span>
          <h2 className="text-[clamp(1.625rem,4vw,2.5rem)] font-bold text-[#0F2854] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#0F2854]/65 text-base max-w-2xl mx-auto">
            Common questions about our services, process, pricing, and technology. Can&apos;t find your answer? Contact us directly at <strong>+91 9342436069</strong>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-[#0F2854]/15 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h3 className="text-[#0F2854] font-semibold text-base">{faq.q}</h3>
                <span className={`shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-[#0F2854]/30 text-[#0F2854] transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5" /><line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5" /></svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#0F2854]/65 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-6">
            Why Choose Astrizion Technologies for IT Services in India?
          </h2>
          <div className="space-y-4 text-[#0F2854]/70 text-base leading-relaxed">
            <p>
              Astrizion Technologies stands out as a trusted IT partner for businesses in India and globally for several reasons. First, we offer a complete suite of digital services under one roof — from web development and mobile apps to AI/ML and digital marketing — eliminating the need to manage multiple vendors. Second, we work transparently with regular progress updates, clear timelines, and honest pricing.
            </p>
            <p>
              Third, our team is built around real engineering expertise. Every developer on our team is proficient in modern frameworks and best practices — we don&apos;t use templates or shortcuts. Fourth, we treat every project as a long-term partnership, not a one-time transaction. We remain available for support, updates, and scaling as your business grows.
            </p>
            <p>
              Based in Tamil Nadu with clients across India (including Namakkal, Coimbatore, Chennai, Bengaluru, Mumbai, and Delhi) and internationally, Astrizion Technologies combines the reliability of a local company with the capabilities of a global IT firm.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
