'use client'

import DashboardHero from '@/components/DashboardHero'

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <DashboardHero />
      <section>
        <h2 className="text-xl font-semibold mb-2">Your Tools & Insights</h2>
        <p className="text-white/60 text-sm">
          This is where you will manage campaigns, audience growth, and performance.
        </p>
      </section>
    </div>
  )
}
