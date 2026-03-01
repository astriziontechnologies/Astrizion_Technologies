'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollUp}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-4 sm:bottom-8 sm:right-6 lg:right-8 z-40
                     w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11
                     rounded-full bg-[#1C4D8D] text-white shadow-lg
                     flex items-center justify-center
                     hover:bg-[#0F2854] transition-colors duration-200"
        >
          <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
