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
    <div className="flex h-screen overflow-hidden bg-[#0a011a] text-white">
      {/* Sidebar (visible on md+, slide over on mobile) */}
      <DashboardSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
