'use client'

import Image from 'next/image'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { Users, BadgeCheck, Layers, Globe } from 'lucide-react'

export default function ImpactSection() {
  const logos = [
    { name: 'Arbitrum', src: '/logos/arb.svg' },
    { name: 'Optimism', src: '/logos/opt.svg' },
    { name: 'Ethereum', src: '/logos/eth.svg' },
    { name: 'Avalanche', src: '/logos/ava.svg' },
    { name: 'Solana', src: '/logos/sol.svg' },
    { name: 'Monad', src: '/logos/mon.svg' },
    { name: 'Labs', src: '/logos/0g.svg' },
  ]

  const stats = [
    { icon: Users, label: 'Users', value: 4000 },
    { icon: BadgeCheck, label: 'Credentials', value: 120000 },
    { icon: Layers, label: 'Projects', value: 380 },
    { icon: Globe, label: 'Community', value: 1200000 },
  ]

  return (
    <section className="relative z-10 py-24 px-6 md:px-12 bg-gradient-to-br from-[#0c021f] to-[#1a0730] text-white overflow-hidden">
      {/* Glows */}
      <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500 opacity-10 blur-2xl rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold mb-14"
        >
          Trusted by Web3 Builders & Visionaries
        </motion.h2>

        {/* Infinite Logos */}
        <div className="overflow-hidden relative mb-20">
          <div className="whitespace-nowrap animate-scroll flex gap-12 md:gap-20 w-max items-center relative z-20">
            {logos.concat(logos).map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/60 hover:text-white transition min-w-fit"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={28}
                  height={28}
                  className="h-6 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
                />
                <span className="text-xs md:text-sm font-light whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md p-6 text-center shadow hover:shadow-purple-500/20 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 mx-auto mb-3">
                <stat.icon size={24} className="text-purple-400" />
              </div>
              <div className="text-2xl md:text-4xl font-bold">
                <CountUp end={stat.value} duration={2} separator="," />
              </div>
              <div className="text-white/50 text-sm md:text-base mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
