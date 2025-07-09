'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ReactNode, useState, useRef } from 'react'

interface MenuItem {
  title: string
  description: string
  icon: ReactNode
  link: string
}

export default function HeaderDropdown({
  label,
  menuItems,
}: {
  label: string
  menuItems: MenuItem[]
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150) // short delay to prevent flicker
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center text-white hover:text-purple-400 text-[15px] transition">
        {label}
        <ChevronDown size={16} className="ml-1 transition-transform" />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-4 w-[360px] bg-[#0c021f] border border-white/10 rounded-2xl shadow-xl p-4 z-50 backdrop-blur-lg"
        >
          <div className="space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="flex items-start gap-4 hover:bg-white/5 p-3 rounded-xl transition"
              >
                <div className="mt-1 text-purple-400">{item.icon}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs leading-snug mt-1">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
