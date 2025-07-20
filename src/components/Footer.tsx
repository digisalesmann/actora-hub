'use client'

import Link from 'next/link'
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#060015] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start gap-16 md:gap-24">
        
        {/* Left: Logo + Description + CTA */}
        <div className="md:flex-1">
          <div className="relative w-[160px] h-[48px] mb-4">
            <Image src="/actora-logoo.png" alt="Actora Logo" fill className="object-contain" />
          </div>
          <p className="text-white/60 mb-6 text-sm leading-relaxed max-w-sm">
            Actora is a growth coordination platform for Web3 teams and ecosystems → build faster, grow smarter, and activate your community like never before.
          </p>
          <Link
            href="/newsletter"
            className="inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-sm"
          >
            Sign up to Newsletter
          </Link>
        </div>

        {/* Right: Links */}
        <div className="md:flex-1 grid grid-cols-3 gap-6 text-sm text-white/70 mt-6 pt-4 md:mt-0">
          {/* Product */}
          <div className="space-y-1">
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-1">
              <li><Link href="/product/quest" className="hover:text-white transition">Quest</Link></li>
              <li><Link href="/product/launchpad" className="hover:text-white transition">Launchpad</Link></li>
              <li><Link href="/product/analytics" className="hover:text-white transition">Analytics</Link></li>
              <li><Link href="/product/smartflows" className="hover:text-white transition">Smart Flows</Link></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="space-y-1">
            <h4 className="text-white font-semibold mb-3">Ecosystem</h4>
            <ul className="space-y-1">
              <li><Link href="/ecosystem/gravity" className="hover:text-white transition">Actora Gravity</Link></li>
              <li><Link href="/ecosystem/ambassadors" className="hover:text-white transition">Ambassadors</Link></li>
              <li><Link href="/ecosystem/partners" className="hover:text-white transition">Partners</Link></li>
              <li><Link href="/ecosystem/grants" className="hover:text-white transition">Grants</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-1">
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-1">
              <li><Link href="/company/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/company/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/company/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/company/legal" className="hover:text-white transition">Legal</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/50 gap-4">
        <div>&copy; {new Date().getFullYear()} Actora Labs. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          <div className="flex gap-4 ml-2 text-white/60">
            <a href="https://twitter.com/actorahq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTwitter /></a>
            <a href="https://discord.gg/actora" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaDiscord /></a>
            <a href="https://github.com/actorahq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
