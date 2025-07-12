'use client'

import Particles from 'react-tsparticles'

export default function TestParticles() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ['#ffffff', '#9333ea', '#a855f7'] },
            shape: { type: 'circle' },
            opacity: { value: 0.7 },
            size: { value: { min: 3, max: 6 }, random: true },
            links: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <h1 className="text-3xl font-bold">Particles Test</h1>
      </div>
    </div>
  )
}
