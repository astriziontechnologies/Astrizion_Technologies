'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  Info,
  Layers,
  Code2,
  Briefcase,
  Mail,
  type LucideIcon
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home',     label: 'Home',     href: '/',         icon: Home     },
  { id: 'about',    label: 'About',    href: '/about',    icon: Info     },
  { id: 'services', label: 'Services', href: '/services', icon: Layers   },
  { id: 'projects', label: 'Projects', href: '/projects', icon: Code2    },
  { id: 'careers',  label: 'Careers',  href: '/careers',  icon: Briefcase },
  { id: 'contact',  label: 'Contact',  href: '/contact',  icon: Mail     },
];

const tapSpring       = { type: 'spring' as const, stiffness: 600, damping: 25 };
const iconSpring      = { type: 'spring' as const, stiffness: 500, damping: 20 };
const indicatorSpring = { type: 'spring' as const, stiffness: 600, damping: 30 };

export function BottomNavbar() {
  const pathname = usePathname();
  const router   = useRouter();

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-[80] lg:hidden bg-[#BDE8F5]/90 backdrop-blur-xl border-t border-[#1C4D8D]/30 shadow-[0_-4px_20px_rgba(15,40,84,0.1)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center justify-around">
        {NAV_ITEMS.map(({ id, label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <motion.button
              key={id}
              onClick={() => router.push(href)}
              className={`relative flex flex-col items-center justify-center px-1 py-2 flex-1 transition-colors duration-150 ${
                isActive ? 'text-[#0F2854]' : 'text-[#0F2854]/50'
              }`}
              whileTap={{ scale: 0.92 }}
              transition={tapSpring}
            >
              {/* Icon with scale + wobble animation */}
              <motion.div
                className="relative"
                animate={{ scale: isActive ? 1.15 : 1, y: isActive ? -3 : 0 }}
                transition={iconSpring}
              >
                <motion.div
                  animate={{ rotate: isActive ? [0, -5, 5, 0] : 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
              </motion.div>

              {/* Label */}
              <motion.span
                className={`text-[10px] mt-1 truncate max-w-full ${
                  isActive ? 'font-semibold' : 'font-medium'
                }`}
                animate={{ opacity: isActive ? 1 : 0.6, y: isActive ? 1 : 0 }}
                transition={{ duration: 0.15 }}
              >
                {label}
              </motion.span>

              {/* Active underline indicator — slides between tabs */}
              {isActive && (
                <motion.div
                  layoutId="bottomNavActiveIndicator"
                  className="absolute bottom-0 mb-1 h-0.5 w-6 rounded-full bg-gradient-to-r from-[#4988C4] to-[#BDE8F5]"
                  transition={indicatorSpring}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
