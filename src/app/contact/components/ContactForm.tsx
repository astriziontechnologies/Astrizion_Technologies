'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const services = [
  'Web Development',
  'Mobile App Development',
  'AI / ML Solutions',
  'Automations',
  'IT Consulting',
  'Digital Marketing',
  'Web Scraping',
  'Other',
]

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    // TODO: Connect Supabase backend
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus('success')
    setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/80 border border-[#1C4D8D]/30 text-[#0F2854] placeholder-[#0F2854]/25 text-sm focus:outline-none focus:border-[#4988C4]/60 focus:bg-[#BDE8F5]/50 transition-all duration-200'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="p-5 sm:p-8 rounded-2xl border border-[#1C4D8D]/25 bg-white/60"
    >
      <h2 className="text-[#0F2854] font-bold text-2xl mb-6">Send Us a Message</h2>

      {status === 'success' ? (
        <div className="text-center py-12">
          <CheckCircle size={48} className="text-[#4988C4] mx-auto mb-4" />
          <h3 className="text-[#0F2854] font-bold text-xl mb-2">Message Sent!</h3>
          <p className="text-[#0F2854]/45 leading-relaxed">
            Thank you for reaching out. We will review your message and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 px-6 py-2.5 rounded-xl border border-[#1C4D8D]/40 text-[#4988C4] text-sm hover:bg-[#1C4D8D]/20 transition-colors"
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Your Name *</label>
              <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Email *</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Phone <span className="normal-case text-[#0F2854]/25">(optional)</span></label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Company <span className="normal-case text-[#0F2854]/25">(optional)</span></label>
              <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company name" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Service Interested In *</label>
            <select name="service" required value={form.service} onChange={handleChange} className={inputClass}>
              <option value="" disabled>Select a service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Your Message *</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, and timeline..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              <AlertCircle size={16} />
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#1C4D8D] to-[#4988C4] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#4988C4]/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <><Loader2 size={18} className="animate-spin" /> Sending...</>
            ) : (
              <><Send size={18} /> Send Message</>
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}
