import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react'

const services = [
  'Web Development',
  'Mobile Apps',
  'AI / ML Solutions',
  'Automations',
  'IT Consulting',
  'Digital Marketing',
  'Web Scraping',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#95C9E0] border-t border-[#1C4D8D]/20 overflow-hidden pb-20 lg:pb-0">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#4988C4]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-[#1C4D8D]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 lg:gap-x-16 mb-8 items-start">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-3 group">
              <div className="relative w-40 h-40 shrink-0">
                <Image
                  src="/left-side-logo-bg.png"
                  alt="Astrizion Technologies Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-[#0F2854]/80 text-sm leading-relaxed mb-2">
              Initiate · Integrate · Innovate
            </p>
            <p className="text-[#0F2854]/80 text-sm leading-relaxed mb-4">
              We build technology solutions that transform businesses and drive growth in the digital age.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1C4D8D]/40 text-[#0F2854]/70 hover:text-[#1C4D8D] hover:border-[#4988C4]/60 hover:bg-[#1C4D8D]/20 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#0F2854] font-semibold text-sm tracking-wider uppercase mb-3">Services</h4>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[#0F2854]/80 text-sm hover:text-[#1C4D8D] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4988C4]/50 group-hover:bg-[#BDE8F5] transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0F2854] font-semibold text-sm tracking-wider uppercase mb-3">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#0F2854]/80 text-sm hover:text-[#1C4D8D] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4988C4]/50 group-hover:bg-[#BDE8F5] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#0F2854] font-semibold text-sm tracking-wider uppercase mb-3">Contact</h4>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#4988C4] mt-0.5 shrink-0" />
                <a href="mailto:astriziontechnologies@gmail.com" className="text-[#0F2854]/80 text-sm hover:text-[#1C4D8D] transition-colors break-all">
                  astriziontechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#4988C4] mt-0.5 shrink-0" />
                <a href="tel:+919342436069" className="text-[#0F2854]/80 text-sm hover:text-[#1C4D8D] transition-colors">
                  +91 9342436069
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#4988C4] mt-0.5 shrink-0" />
                <span className="text-[#0F2854]/80 text-sm">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-[#1C4D8D]/15 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-[#0F2854]/65 text-xs">
            © {new Date().getFullYear()} Astrizion Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
