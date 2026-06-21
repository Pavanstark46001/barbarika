'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  Menu, X, Sun, Moon, ChevronDown, Zap, ExternalLink,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/navigation'
import { CONTACT_WHATSAPP } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { isScrolled } = useScrollProgress()
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { setMenuOpen(false); setActiveDropdown(null) }, [pathname])

  const openDropdown = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-cyan z-[60]"
        style={{ scaleX: 0, transformOrigin: 'left' }}
        id="progress-bar"
      />

      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          isScrolled
            ? 'py-3 glass-strong border-b border-white/10 shadow-xl shadow-black/10'
            : 'py-5 bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-xl font-display font-bold gradient-text">Barbarika</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              const hasChildren = link.children && link.children.length > 0

              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && openDropdown(link.label)}
                  onMouseLeave={() => hasChildren && closeDropdown()}
                >
                  {hasChildren ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-primary-light bg-primary/10'
                          : 'text-muted hover:text-foreground hover:bg-surface-2'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-primary-light bg-primary/10'
                          : 'text-muted hover:text-foreground hover:bg-surface-2'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hasChildren && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        onMouseEnter={() => openDropdown(link.label)}
                        onMouseLeave={closeDropdown}
                        className="absolute top-full left-0 mt-2 min-w-[220px] glass-strong rounded-xl border border-white/10 shadow-2xl shadow-black/30 p-2"
                      >
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-150',
                              'text-muted hover:text-foreground hover:bg-white/5 group'
                            )}
                          >
                            <span className="flex-1">{child.label}</span>
                            <ExternalLink
                              size={12}
                              className="opacity-0 group-hover:opacity-50 transition-opacity"
                            />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-2 transition-all duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            {/* CTA */}
            <MagneticButton className="hidden sm:block">
              <Button
                variant="glow"
                size="sm"
                onClick={() =>
                  window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=Hi, I'd like to discuss a project.`, '_blank')
                }
              >
                Get Started
              </Button>
            </MagneticButton>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1 glass-strong">
                {navLinks.map((link, i) => (
                  <div key={link.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                          pathname === link.href
                            ? 'bg-primary/10 text-primary-light'
                            : 'text-muted hover:text-foreground hover:bg-surface-2'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-4 py-2 rounded-lg text-xs text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 pb-2">
                  <Button
                    variant="glow"
                    fullWidth
                    onClick={() =>
                      window.open(
                        `https://wa.me/${CONTACT_WHATSAPP}?text=Hi, I'd like to discuss a project.`,
                        '_blank'
                      )
                    }
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
