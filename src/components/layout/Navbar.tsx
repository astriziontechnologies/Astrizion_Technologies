'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#BDE8F5]/90 backdrop-blur-xl border-b border-[#1C4D8D]/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center lg:justify-between h-16 sm:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0">
              <Image
                src="/left-side-logo-bg.png"
                alt="Astrizion Technologies"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                    pathname === link.href ? 'text-[#0F2854]' : 'text-[#0F2854]/70 hover:text-[#0F2854]'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-[#4988C4] to-[#BDE8F5]"
                    />
                  )}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-[#4988C4]/0 group-hover:bg-[#4988C4]/50 transition-all duration-200" />
                </Link>
              ))}
            </nav>

            {/* Right side: CTA (desktop) + Hamburger (mobile) */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#0F2854] to-[#1C4D8D] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1C4D8D]/30"
              >
                Get in Touch
              </Link>

              {/* Hamburger button — mobile & tablet only */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#1C4D8D]/30 text-[#0F2854] hover:bg-[#1C4D8D]/10 transition-colors duration-200"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex"
                    >
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex"
                    >
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#BDE8F5]/98 backdrop-blur-xl pt-16 sm:pt-18"
          >
            <nav className="flex flex-col items-center justify-center gap-6 h-full pb-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-semibold transition-colors duration-200 ${
                      pathname === link.href ? 'text-[#0F2854]' : 'text-[#0F2854]/60 hover:text-[#0F2854]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-2"
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#0F2854] to-[#1C4D8D] rounded-xl"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
