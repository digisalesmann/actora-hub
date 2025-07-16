'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import GlowLottie from '../../public/lotties/glow.json'
import {
  FaCodeBranch,
  FaUserFriends,
  FaChartBar,
  FaShieldAlt,
} from 'react-icons/fa'

const pillars = [
  {
    title: 'Composable by Design',
    icon: <FaCodeBranch className="text-purple-400" size={26} />,
    description:
      'From plug-and-play modules to modular APIs — Actora adapts to your Web3 growth needs, not the other way around.',
  },
  {
    title: 'Network-Aware Growth',
    icon: <FaUserFriends className="text-pink-400" size={26} />,
    description:
      'Bridge social, wallet, and onchain behavior into one real-time system to create smarter growth loops.',
  },
  {
    title: 'Data Meets Action',
    icon: <FaChartBar className="text-blue-400" size={26} />,
    description:
      'Real-time dashboards. Smart triggers. Let analytics drive execution and automate your campaign flows.',
  },
  {
    title: 'Battle-Tested Infrastructure',
    icon: <FaShieldAlt className="text-green-400" size={26} />,
    description:
      'Used by top Web3 teams and DAOs — Actora is optimized for performance, security, and scale.',
  },
]

export default function WhyActoraSection() {
  return (
    <section className="relative z-10 py-28 px-6 md:px-12 bg-gradient-to-br from-[#0c021f] to-[#1a0730] text-white overflow-hidden">

      {/* Animated Glow Bubbles */}
      <div className="absolute left-[-80px] top-[-80px] w-[300px] h-[300px] z-0 opacity-30 pointer-events-none">
        <Lottie animationData={GlowLottie} loop autoplay />
      </div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] z-0 opacity-20 pointer-events-none">
        <Lottie animationData={GlowLottie} loop autoplay />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Why Builders and Ecosystems <span className="text-purple-400">Choose Actora</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/60 text-lg max-w-3xl mx-auto mb-20"
        >
          Actora isn’t just a platform — it’s your programmable engine for growth, coordination, and retention. Built for builders. Trusted by networks.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group transition-transform hover:scale-[1.015]"
            >
              {/* Parallax Glow Effect */}
              <div className="absolute inset-0 bg-purple-500/5 blur-xl rounded-xl opacity-0 group-hover:opacity-40 transition duration-300" />
              <div className="relative z-10 p-6 border border-white/10 backdrop-blur-lg bg-white/5 rounded-xl">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
