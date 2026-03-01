'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const positions = [
  'Full Stack Developer',
  'Mobile App Developer',
  'AI/ML Engineer',
  'Digital Marketing Specialist',
  'Other',
]

const experienceLevels = ['Fresher (0-1 years)', 'Junior (1-2 years)', 'Mid-level (2-4 years)', 'Senior (4+ years)']

interface FormState {
  full_name: string
  email: string
  phone: string
  position: string
  experience: string
  linkedin: string
  portfolio: string
  cover_letter: string
}

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>({
    full_name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    portfolio: '',
    cover_letter: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    // TODO: Connect Supabase backend
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus('success')
    setForm({ full_name: '', email: '', phone: '', position: '', experience: '', linkedin: '', portfolio: '', cover_letter: '' })
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl bg-white/80 border border-[#1C4D8D]/30 text-[#0F2854] placeholder-[#0F2854]/25 text-sm focus:outline-none focus:border-[#4988C4]/60 focus:bg-[#BDE8F5]/50 transition-all duration-200'

  return (
    <section id="apply" className="py-20 bg-[#95C9E0]/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1C4D8D]/50 bg-[#1C4D8D]/10 text-[#4988C4] text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4988C4] pulse-dot" />
            Apply Now
          </span>
          <h2 className="text-[clamp(1.625rem,4vw,2.5rem)] font-bold text-[#0F2854] mb-3">
            Send Your <span className="gradient-text">Application</span>
          </h2>
          <p className="text-[#0F2854]/40 text-sm">
            Don&apos;t see your role? Apply anyway — we are always looking for great people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-5 sm:p-8 rounded-2xl border border-[#1C4D8D]/25 bg-white/60"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle size={48} className="text-[#4988C4] mx-auto mb-4" />
              <h3 className="text-[#0F2854] font-bold text-xl mb-2">Application Submitted!</h3>
              <p className="text-[#0F2854]/45">Thank you for applying. We will review your application and get back to you within 3-5 business days.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 rounded-xl border border-[#1C4D8D]/40 text-[#4988C4] text-sm hover:bg-[#1C4D8D]/20 transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Full Name *</label>
                  <input name="full_name" type="text" required value={form.full_name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@email.com" className={inputClass} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Phone *</label>
                  <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Position *</label>
                  <select name="position" required value={form.position} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Select a position</option>
                    {positions.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Experience Level *</label>
                <select name="experience" required value={form.experience} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select experience level</option>
                  {experienceLevels.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>

              {/* Row 4 - Optional */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">LinkedIn <span className="normal-case text-[#0F2854]/25">(optional)</span></label>
                  <input name="linkedin" type="url" value={form.linkedin} onChange={handleChange} placeholder="linkedin.com/in/..." className={inputClass} />
                </div>
                <div>
                  <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Portfolio <span className="normal-case text-[#0F2854]/25">(optional)</span></label>
                  <input name="portfolio" type="url" value={form.portfolio} onChange={handleChange} placeholder="yourportfolio.com" className={inputClass} />
                </div>
              </div>

              {/* Cover letter */}
              <div>
                <label className="block text-[#0F2854]/50 text-xs mb-1.5 font-medium uppercase tracking-wider">Cover Letter / Why Us? *</label>
                <textarea
                  name="cover_letter"
                  required
                  rows={5}
                  value={form.cover_letter}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your experience, and why you want to join Astrizion Technologies..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Error */}
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
                  <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                ) : (
                  <><Send size={18} /> Submit Application</>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
