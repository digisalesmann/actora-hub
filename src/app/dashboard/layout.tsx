'use client'

import { SidebarProvider, useSidebar } from '@/context/SidebarContext'
import DashboardHeader from '@/components/DashboardHeader'
import DashboardSidebar from '@/components/DashboardSidebar'

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar()

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-[#0a011a] text-white">
      <DashboardSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(prev => !prev)} />

      <div className="flex flex-col flex-1">
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main
          className={`flex-1 pt-[90px] px-4 sm:px-6 pb-10 transition-all duration-300 ${
            sidebarOpen ? 'sm:pl-[272px]' : 'sm:pl-[84px]'
          }`}
        >
          <div className="max-w-7xl mx-auto space-y-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  )
}
