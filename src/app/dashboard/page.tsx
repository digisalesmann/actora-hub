'use client'

import DashboardHero from '@/components/DashboardHero'
import Image from 'next/image'
import { BarChart3, Rocket, Users, Zap, Link2, LineChart } from 'lucide-react'

const navItems = [
  { label: 'All', icon: <Zap size={16} /> },
  { label: 'Campaigns', icon: <Rocket size={16} /> },
  { label: 'Explore', icon: <Users size={16} /> },
  { label: 'Growth', icon: <Link2 size={16} /> },
  { label: 'Analytics', icon: <BarChart3 size={16} /> },
  { label: 'Collabs', icon: <LineChart size={16} /> },
]

const mockCards = [
  {
    title: 'Power Your Campaigns',
    description: 'Smart Automations',
    image: '/assets/campaigns-tech.png',
    participants: 9800,
    tags: ['/icons/xp-icon.svg', '/icons/gg.png']
  },
  {
    title: 'Build Creator Networks',
    description: 'Link & Monetize',
    image: '/assets/network-connect.png',
    participants: 13200,
    tags: ['/icons/xp-icon.svg', '/icons/gg.png']
  },
  {
    title: 'Measure Everything',
    description: 'Web3 Native Insights',
    image: '/assets/insights-dark.png',
    participants: 6400,
    tags: ['/icons/xp-icon.svg', '/icons/gg.png']
  }
]

function formatParticipants(num: number) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

export default function DashboardHome() {
  return (
    <div className="space-y-10">
      <DashboardHero />

      {/* Refined Nav Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide px-2">
        {navItems.map(({ label, icon }, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-gradient-to-r from-[#15151A]/80 to-[#1F1F27]/80 text-white/80 text-sm font-medium hover:from-[#1F1F27]/90 hover:to-[#15151A]/90 backdrop-blur transition whitespace-nowrap"
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <section className="pt-2 animate-fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-gradient-to-br from-[#101216] to-[#1a1c22] border border-white/10 shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-white/60 font-medium">
                    {card.description}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                  {card.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">
                    {formatParticipants(card.participants)} Participants
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  {card.tags.map((tag, i) => (
                    <Image key={i} src={tag} alt="tag" width={24} height={24} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}