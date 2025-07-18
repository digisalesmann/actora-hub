'use client'

import { useState } from 'react'
import DashboardHeader from '@/components/DashboardHeader'
import DashboardSidebar from '@/components/DashboardSidebar'
import DashboardHero from '@/components/DashboardHero'

export default function DashboardHome() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DashboardSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <main
        className={`pt-24 px-6 pb-6 text-white space-y-6 transition-all duration-300 ${
          sidebarOpen ? 'pl-64' : 'pl-16'
        }`}
      >
        <DashboardHero />
        <section>
          <h2 className="text-xl font-semibold mb-2">Your Tools & Insights</h2>
          <p className="text-white/60 text-sm">
            This is where you will manage campaigns, audience growth, and performance.
          </p>
        </section>
      </main>
    </>
  )
}
