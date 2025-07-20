'use client'

import Image from 'next/image'
import { Rocket, BarChart3, UserPlus2, Coins } from 'lucide-react'

export default function DashboardHero() {
  return (
    <section
      className="transition-all duration-300 px-4 md:px-8 pt-6 sm:pt-10 text-white
      bg-gradient-to-br from-[#150528]/80 to-[#230938]/90
      rounded-2xl border border-white/10 shadow-xl backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left: Welcome + CTA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome back, Creator ✨</h2>
          <p className="text-white/70 text-base md:text-lg mb-6">
            Launch powerful campaigns, track your growth, and explore insights tailored for your community.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-full text-sm font-medium shadow-md">
            <Rocket className="inline-block mr-2 -mt-1" size={18} />
            Start Creating
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-sm">
            <StatBox icon={UserPlus2} label="New Followers" value="+1.2k" />
            <StatBox icon={BarChart3} label="Reach" value="89K" />
            <StatBox icon={Coins} label="Earnings" value="$2,430" />
            <StatBox icon={Rocket} label="Campaigns" value="7" />
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full">
          <Image
            src="/illustrations/hero.png"
            alt="Dashboard Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}

function StatBox({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
      <Icon size={16} className="text-purple-400" />
      <div>
        <p className="text-white/70 text-xs">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  )
}
