'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiSearch, FiSmartphone, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import SearchModal from './SearchModal'
import { navLinks } from '@/lib/navLinks'

type DashboardHeaderProps = {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DashboardHeader({ sidebarOpen, setSidebarOpen }: DashboardHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [appModalOpen, setAppModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setAppModalOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#0c021f]/90 to-[#1a0730]/90 backdrop-blur-md border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
      <div className="flex items-center justify-between">
        {/* LEFT SECTION: LOGO & TOGGLES */}
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle (Desktop) */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden md:flex text-white hover:bg-white/10 p-2 rounded transition"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white hover:bg-white/10 p-2 rounded transition"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40 sm:h-12 sm:w-48">
              <Image
                src="/actora-logoo.png"
                alt="Actora Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* CENTER: SEARCH BAR (Desktop Only) */}
        <div className="hidden md:flex items-center bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 w-full max-w-md mx-8 text-white">
          <FiSearch
            className="text-white/60 mr-2 cursor-pointer"
            size={18}
            onClick={() => setSearchOpen(true)}
          />
          <input
            type="text"
            placeholder="Search insights, campaigns..."
            className="bg-transparent text-sm placeholder-white/40 w-full focus:outline-none"
            onFocus={() => setSearchOpen(true)}
          />
          <div className="flex items-center gap-1 text-xs text-white/40 ml-3">
            <span className="hidden sm:block">Press</span>
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded border border-white/20">/</kbd>
          </div>
        </div>

        {/* RIGHT SECTION: ICONS & AUTH */}
        <div className="flex items-center gap-3">
          {/* Mobile App Icon */}
          <motion.div
            onClick={() => setAppModalOpen(prev => !prev)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
            aria-label="Get mobile app"
          >
            <FiSmartphone className="text-white" size={18} />
          </motion.div>

          {/* Auth Buttons (Desktop Only) */}
          <div className="hidden sm:flex items-center bg-white/10 rounded-full p-1">
            <Link
              href="/login"
              className="px-4 py-1.5 rounded-full text-sm text-white hover:bg-white/20"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-1.5 rounded-full text-sm bg-purple-600 hover:bg-purple-700 text-white ml-1 shadow-md"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="md:hidden mt-3 bg-[#130126] border border-white/10 rounded-xl p-4 text-white space-y-4 shadow-lg"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-2 px-2 border-b border-white/10 hover:text-purple-400 transition"
                >
                  <Icon size={16} className="text-white/70" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Link
                href="/login"
                className="w-full text-center bg-white/10 hover:bg-white/20 text-white py-2 rounded-full text-sm"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full text-sm"
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
