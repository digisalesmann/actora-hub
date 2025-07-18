// src/app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Actora',
  description: 'Built for builders. Trusted by networks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col bg-[#0c021f] text-white relative">
          {/* 🚫 DO NOT include <Header /> here */}
          {children}
        </div>
      </body>
    </html>
  )
}
