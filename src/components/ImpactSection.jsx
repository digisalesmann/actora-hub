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

  const formatValue = (value) => {
    if (value >= 1000000) return (value / 1000000).toFixed(1) + 'm'
    if (value >= 1000) return (value / 1000).toFixed(1) + 'k'
    return value
  }

  const stats = [
    { icon: <Users size={28} />, label: 'Users', value: 4000 },
    { icon: <BadgeCheck size={28} />, label: 'Credentials', value: 120000 },
    { icon: <Layers size={28} />, label: 'Projects', value: 380 },
    { icon: <Globe size={28} />, label: 'Community', value: 1200000 },
  ]

  return (
    <section className="relative z-10 py-20 md:py-32 bg-gradient-to-br from-[#0c021f] to-[#1a0730] text-white overflow-hidden">
      {/* Glows */}
      <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500 opacity-10 blur-2xl rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-3xl font-medium mb-12 md:mb-20"
        >
          Trusted by Web3 Builders & Visionaries
        </motion.h2>

        {/* Infinite Logos */}
        <div className="overflow-hidden mb-20">
          <div className="relative w-full">
            <div className="whitespace-nowrap animate-scroll flex gap-12 md:gap-20 w-max items-center">
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
        </div>

        {/* Animated Full Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="mb-3 text-purple-400">{stat.icon}</div>
              <div className="text-2xl md:text-5xl font-bold">
                <span className="block md:hidden">{formatValue(stat.value)}</span>
                <span className="hidden md:block">
                  <CountUp end={stat.value} duration={2} separator="," />
                </span>
              </div>
              <div className="text-white/50 text-sm md:text-base mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smooth Scrolling CSS */}
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
