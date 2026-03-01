'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

const info = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'astriziontechnologies@gmail.com',
    href: 'mailto:astriziontechnologies@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 9342436069',
    href: 'tel:+919342436069',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-6"
    >
      <div className="p-8 rounded-2xl border border-[#1C4D8D]/25 bg-white/60">
        <h3 className="text-[#0F2854] font-bold text-xl mb-6">Contact Information</h3>
        <div className="space-y-5">
          {info.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#1C4D8D]/20 border border-[#1C4D8D]/30 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#4988C4]" />
                </div>
                <div>
                  <p className="text-[#0F2854]/35 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[#0F2854]/70 text-sm hover:text-[#1C4D8D] transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#0F2854]/70 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick note */}
      <div className="p-6 rounded-2xl border border-[#1C4D8D]/20 bg-gradient-to-br from-[#BDE8F5] to-white">
        <div className="flex items-start gap-3">
          <MessageSquare size={18} className="text-[#4988C4] mt-0.5 shrink-0" />
          <div>
            <p className="text-[#0F2854] font-medium text-sm mb-2">Not sure where to start?</p>
            <p className="text-[#0F2854]/40 text-xs leading-relaxed">
              Book a free 30-minute consultation call. We will listen to your needs, answer your questions, and suggest the best solution — no commitment required.
            </p>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="p-6 rounded-2xl border border-[#1C4D8D]/20 bg-white/40">
        <p className="text-[#0F2854]/40 text-xs uppercase tracking-wider mb-4">Follow Us</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
            <a
              key={social}
              href="#"
              className="py-2 text-center text-xs text-[#0F2854]/40 border border-[#1C4D8D]/25 rounded-lg hover:text-[#1C4D8D] hover:border-[#4988C4]/40 transition-all"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
