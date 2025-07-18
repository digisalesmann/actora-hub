'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import HeaderDropdown from './HeaderDropdown';
import { motion, AnimatePresence } from 'framer-motion'


import {
  Rocket,
  Layers,
  BarChart3,
  Flame,
  Users,
  Network,
  Briefcase,
  BookOpen,
} from 'lucide-react'

const productMenu = [
  {
    title: 'Quest',
    description: 'Launch on-chain campaigns and rewards',
    icon: <Rocket size={20} />,
    link: '/product/quest',
  },
  {
    title: 'Launchpad',
    description: 'Token launch toolkit for web3 creators',
    icon: <Layers size={20} />,
    link: '/product/launchpad',
  },
  {
    title: 'Analytics',
    description: 'Track campaign insights and performance',
    icon: <BarChart3 size={20} />,
    link: '/product/analytics',
  },
]

const exploreMenu = [
  {
    title: 'Trending Campaigns',
    description: 'Discover what’s buzzing on Actora',
    icon: <Flame size={20} />,
    link: '/explore/trending',
  },
  {
    title: 'Top Creators',
    description: 'View high-performing campaign creators',
    icon: <Users size={20} />,
    link: '/explore/creators',
  },
]

const ecosystemMenu = [
  {
    title: 'Actora Gravity',
    description: 'Connect & grow your web3 community',
    icon: <Network size={20} />,
    link: '/ecosystem/gravity',
  },
  {
    title: 'Ambassadors',
    description: 'Become a voice for the Actora ecosystem',
    icon: <Users size={20} />,
    link: '/ecosystem/ambassadors',
  },
]

const companyMenu = [
  {
    title: 'About Us',
    description: 'The story and team behind Actora',
    icon: <BookOpen size={20} />,
    link: '/company/about',
  },
  {
    title: 'Careers',
    description: 'Join our team and build the future of onchain campaigns',
    icon: <Briefcase size={20} />,
    link: '/company/careers',
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdowns, setDropdowns] = useState({
    product: false,
    explore: false, 
    ecosystem: false,
    company: false,
  })

  type DropdownKey = keyof typeof dropdowns;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

const toggleDropdown = (section: DropdownKey) => {
  setDropdowns((prev) => ({
    ...prev,
    [section]: !prev[section],
  }))
}

  return (
    <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gradient-to-br from-[#0c021f]/90 to-[#1a0730]/90 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-[56px] w-[180px] md:h-[60px] md:w-[200px]">
              <Image
                src="/actora-logoo.png"
                alt="Actora Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-white text-[15px] font-normal tracking-tight">
            <HeaderDropdown label="Product" menuItems={productMenu} />
            <HeaderDropdown label="Explore" menuItems={exploreMenu} />
            <HeaderDropdown label="Ecosystem" menuItems={ecosystemMenu} />
            <HeaderDropdown label="Company" menuItems={companyMenu} />
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4 ml-4">
            <Link
              href="/alpha"
              className="border border-white text-white px-5 py-2 rounded-full text-[15px] hover:bg-white hover:text-black transition"
            >
              Join Alpha
            </Link>
            <Link
              href="/dashboard"
              className="bg-[#7c3aed] hover:bg-[#9b4dff] text-white px-6 py-2.5 rounded-full text-[15px] font-medium transition"
            >
              Launch App
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Fullscreen Drawer */}
        <AnimatePresence>
        {menuOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#0c021f] text-white px-4 pt-4 pb-6 flex flex-col h-screen"
        >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#0c021f] z-10 pb-4">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <div className="relative h-[56px] w-[180px]">
              <Image
                src="/actora-logoo.png"
                alt="Actora Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>
        </div>

        {/* Navigation Links with Dropdowns */}
        <nav className="flex flex-col gap-4 mt-2">
          {[
            { label: 'Product', items: productMenu },
            { label: 'Explore', items: exploreMenu },
            { label: 'Ecosystem', items: ecosystemMenu },
            { label: 'Company', items: companyMenu },
          ].map(({ label, items }) => {
            const key = label.toLowerCase() as DropdownKey
            const isOpen = dropdowns[key]

            return (
              <div key={label} className="border-b border-white/10 pb-2">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex justify-between items-center py-2 text-base font-medium"
                >
                  {label}
                  {isOpen ? (
                    <ChevronUp size={18} className="text-purple-400" />
                  ) : (
                    <ChevronDown size={18} className="text-purple-400" />
                  )}
                </button>

                {/* Animate Presence for Dropdown */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${key}-dropdown`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-2 mt-2">
                        {items.map(({ title, link, icon }) => (
                          <Link
                            key={title}
                            href={link}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white/10 transition text-sm"
                          >
                            <span className="text-purple-400">{icon}</span>
                            <span>{title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="mt-6 pt-12 space-y-4">
          <Link
            href="/app"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-purple-600 hover:bg-purple-500 transition text-center py-3 rounded-full text-sm font-medium"
          >
            Launch App
          </Link>
          <Link
            href="/alpha"
            onClick={() => setMenuOpen(false)}
            className="block w-full border border-white hover:bg-white/10 transition text-center py-3 rounded-full text-sm font-medium"
          >
            Client Dashboard
          </Link>
        </div>
      </motion.div>
    )}
</AnimatePresence>
  </header>
  )
}
