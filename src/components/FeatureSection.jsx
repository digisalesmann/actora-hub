'use client'

import { motion } from 'framer-motion'
import { FaCubes, FaBolt, FaGlobe } from 'react-icons/fa'

const features = [
  {
    title: 'Actora Launchpad',
    icon: <FaCubes size={28} className="text-purple-400" />,
    description:
      'Kickstart your Web3 idea with Actora\'s low-code tools and tokenized engagement flows. Go from concept to launch in days.',
    image: '/illustrations/cool.png',
  },
  {
    title: 'Actora Signal',
    icon: <FaBolt size={28} className="text-pink-400" />,
    description:
      'Plug into real-time growth analytics. Signal tracks performance across quests, campaigns, and onchain touchpoints.',
    image: '/illustrations/signal.png',
  },
  {
    title: 'Actora Mesh',
    icon: <FaGlobe size={28} className="text-blue-400" />,
    description:
      'Your social layer for Web3 communities. Incentivize referrals, auto-distribute rewards, and grow through networked effects.',
    image: '/illustrations/mesh.png',
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-gradient-to-br from-[#0c021f] to-[#1a0730] text-white px-6 md:px-12">
      {/* Soft box effect */}
      <div className="absolute inset-0 border border-white/10 rounded-none max-w-7xl mx-auto blur-sm opacity-10" />

      {/* Background glows */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-2xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Launch. Analyze. Scale. <span className="text-purple-400">Repeat</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/60 text-lg max-w-2xl mx-auto mb-20"
        >
          Whether you're an early-stage builder or an ecosystem leader, Actora gives you full-stack tools to launch, grow, and thrive in Web3.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-14 text-left">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group hover:scale-[1.015] transition-transform"
            >
              {/* Bigger image, no box */}
              <div className="w-full h-64 md:h-72">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 px-1">
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
