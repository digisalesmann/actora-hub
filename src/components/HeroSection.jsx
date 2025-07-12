'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'
import ParticlesBackground from './ParticlesBackground'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-[#0c021f] to-[#1a0730] text-white">
      
      {/* Animated Particles Background */}
      <ParticlesBackground />

      {/* Hero Content */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-20 relative z-10">
        {/* Left Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Your Web3 Growth Engine
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Build smarter. Scale faster. Engage better.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/app"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Launch App
            </Link>
            <Link
              href="/build"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Build with Actora
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/acto.png"
            alt="Actora Hero Visual"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </motion.div>
      </div>

      {/* Floating Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 right-6 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-4 z-20"
      >
        <Link href="https://x.com" className="hover:opacity-80" aria-label="Twitter / X">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
            className="hover:opacity-80 transition"
          >
            <path d="M17.53 3H21L14.4 10.71 22.36 21H16.46L11.51 14.89 5.85 21H2.01L9.05 12.88 1.36 3H7.41L11.95 8.56 17.53 3ZM16.39 19H18.39L7.7 5H5.56L16.39 19Z" />
          </svg>
        </Link>

        <span className="text-white/40">|</span>

        <Link href="https://t.me" className="hover:opacity-80" aria-label="Telegram">
          <FaTelegramPlane size={20} />
        </Link>

        <span className="text-white/40">|</span>

        <Link href="https://discord.gg" className="hover:opacity-80" aria-label="Discord">
          <FaDiscord size={20} />
        </Link>
      </motion.div>
    </section>
  )
}
