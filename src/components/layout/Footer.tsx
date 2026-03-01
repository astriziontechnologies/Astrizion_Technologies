import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowRight } from 'lucide-react'

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
    <footer className="relative bg-[#0F2854] border-t border-white/10 overflow-hidden pb-20 lg:pb-0">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#4988C4]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-[#4988C4]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12 lg:gap-x-20 mb-14 items-start">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-48 h-16 shrink-0">
                <Image
                  src="/left-side-logo-bg.png"
                  alt="Astrizion Technologies Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-white text-base leading-relaxed mb-3">
              Initiate · Integrate · Innovate
            </p>
            <p className="text-white text-base leading-relaxed mb-7">
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
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/20 text-white hover:text-white hover:border-[#4988C4]/70 hover:bg-[#4988C4]/20 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base tracking-wider uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white text-base hover:text-[#BDE8F5] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={15} className="text-[#4988C4] group-hover:text-[#BDE8F5] transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white text-base hover:text-[#BDE8F5] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={15} className="text-[#4988C4] group-hover:text-[#BDE8F5] transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-base tracking-wider uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#4988C4] mt-0.5 shrink-0" />
                <a href="mailto:astriziontechnologies@gmail.com" className="text-white text-sm hover:text-[#BDE8F5] transition-colors whitespace-nowrap">
                  astriziontechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#4988C4] mt-0.5 shrink-0" />
                <a href="tel:+919342436069" className="text-white text-base hover:text-[#BDE8F5] transition-colors">
                  +91 9342436069
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#4988C4] mt-0.5 shrink-0" />
                <span className="text-white text-base">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Astrizion Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
