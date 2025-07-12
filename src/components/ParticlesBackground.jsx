'use client'

import dynamic from 'next/dynamic'
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'

// Dynamically import tsparticles with SSR off
const Particles = dynamic(() => import('react-tsparticles').then(mod => mod.default), {
  ssr: false,
})

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: 'transparent',
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ['#ffffff', '#7c3aed'], // White + Monads purple
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 2, max: 4 },
              random: true,
            },
            links: {
              enable: true,
              distance: 130,
              color: '#a855f7',
              opacity: 0.6,
              width: 1.1,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.8,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
