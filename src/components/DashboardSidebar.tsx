'use client'

import {
  Search,
  Users,
  BarChart3,
  Coins,
  LayoutGrid,
  Layers3,
  Settings,
  Rocket,
  Star,
  Signal,
  Gamepad,
  BarChart2,
  LucideIcon
} from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface DashboardSidebarProps {
  open: boolean
  onToggle: () => void
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ open, onToggle }) => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const sidebarItems = [
  { label: 'Discover', href: '/dashboard', icon: Search },
  { label: 'Community', href: '/community', icon: Users },
  { label: 'Reward', href: '/rewards', icon: Star },
  { label: 'Signal', href: '/signal', icon: Signal },
  { label: 'Play', href: '/play', icon: Gamepad },
  { label: 'Launchpad', href: '/launchpad', icon: Rocket },
  { label: 'Staking', href: '/staking', icon: Coins },
  { label: 'Trade', href: '/trade', icon: LayoutGrid },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/settings', icon: Settings }
]

  return (
    <aside
        className={`hidden sm:block fixed top-[80px] left-0 z-40 h-[calc(100vh-64px)] bg-[#14002e] border-r border-white/10 transition-all duration-300 ${
            open ? 'w-64' : 'w-16'
        } overflow-hidden`}
    >

      {/* Sidebar Content with Scroll */}
      <div className="flex flex-col h-full overflow-y-auto no-scrollbar">

        {/* Navigation */}
        <nav className={`mt-4 flex flex-col gap-1 px-2`}>
          {sidebarItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 text-white py-2 px-3 rounded-lg transition-all duration-200 hover:bg-purple-600
              ${pathname === href ? 'bg-purple-700' : ''}
              ${!open ? 'justify-center' : ''}`}
            >
              <Icon className="w-5 h-5" />
              {open && <span className="ml-1">{label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default DashboardSidebar
