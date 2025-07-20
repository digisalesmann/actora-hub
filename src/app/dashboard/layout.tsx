'use client'

import { useState } from 'react'
import DashboardHeader from '@/components/DashboardHeader'
import DashboardSidebar from '@/components/DashboardSidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-[#0a011a] text-white">
      {/* Sidebar (persistent from sm breakpoint) */}
      <DashboardSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main
          className={`flex-1 pt-[90px] px-4 sm:px-6 pb-10 transition-all duration-300 ${
            sidebarOpen ? 'sm:pl-64' : 'sm:pl-20'
          }`}
        >
          <div className="max-w-7xl mx-auto space-y-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
