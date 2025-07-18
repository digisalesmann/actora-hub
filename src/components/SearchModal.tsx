'use client'

import { useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/60 flex items-start justify-center pt-[100px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl mx-4 rounded-2xl bg-gradient-to-br from-[#1b0c2e] to-[#2e1a4d] shadow-2xl border border-white/10 text-white p-6"
          >
            {/* Search input */}
            <div className="flex items-center border border-white/10 rounded-lg px-4 py-2 bg-white/5 backdrop-blur-md">
              <FiSearch className="text-white/40 mr-3" size={18} />
              <input
                autoFocus
                placeholder="Search dashboards, quests or people..."
                className="w-full bg-transparent placeholder-white/40 text-sm focus:outline-none"
              />
              <kbd className="ml-2 text-xs bg-white/10 text-white/60 px-1.5 py-0.5 rounded border border-white/20">
                esc
              </kbd>
            </div>

            {/* Filters / Examples */}
            <div className="mt-5">
              <div className="text-white/50 mb-2 font-medium text-sm">Filter by:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <button className="rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2 transition border border-white/10 flex items-center justify-center gap-2">
                  🪙 Tokens
                </button>
                <button className="rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2 transition border border-white/10 flex items-center justify-center gap-2">
                  🧊 CUBEs
                </button>
                <button className="rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2 transition border border-white/10 flex items-center justify-center gap-2">
                  🧪 XP
                </button>
                <button className="rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2 transition border border-white/10 flex items-center justify-center gap-2">
                  🖼️ NFTs
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
