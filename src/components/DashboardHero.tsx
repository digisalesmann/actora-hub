'use client'

import { Rocket, BarChart3, UserPlus2, Coins } from 'lucide-react'

export default function DashboardHero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#150528]/80 to-[#230938]/90 rounded-2xl border border-white/10 p-6 sm:p-8 text-white shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Left: Welcome + CTA */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Welcome back, Creator ✨</h2>
          <p className="text-white/70 text-sm mb-4">
            Launch a new campaign or explore insights tailored to your audience.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-2 rounded-full text-sm font-medium shadow">
            <Rocket className="inline-block mr-2 -mt-1" size={16} />
            Start Creating
          </button>
        </div>

        {/* Right: Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <StatBox icon={UserPlus2} label="New Followers" value="+1.2k" />
          <StatBox icon={BarChart3} label="Reach" value="89K" />
          <StatBox icon={Coins} label="Earnings" value="$2,430" />
          <StatBox icon={Rocket} label="Campaigns" value="7" />
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
