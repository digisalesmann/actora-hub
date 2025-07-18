// src/lib/navLinks.ts
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

export interface NavLink {
  label: string
  href: string
  icon: LucideIcon
}

export const navLinks: NavLink[] = [
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
