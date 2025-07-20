'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { FaDiscord, FaTelegramPlane, FaEnvelope, FaTimes } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

export default function ActoraLoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedNetwork, setSelectedNetwork] = useState<'EVM' | 'Solana' | 'Sei' | 'More'>('EVM')

  const renderWalletOptions = () => {
    const wallets: Record<string, { name: string; logo: string; bg?: string }[]> = {
      EVM: [
        { name: 'MetaMask', logo: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg', bg: 'bg-gradient-to-r from-orange-400/20 to-[#0b0c10]' },
        { name: 'Coinbase Wallet', logo: '/wallets/coinbase.png', bg: 'bg-gradient-to-r from-blue-500/20 to-[#0b0c10]' },
        { name: 'Binance Wallet', logo: '/wallets/binance.png', bg: 'bg-gradient-to-r from-yellow-400/20 to-[#0b0c10]' },
        { name: 'OKX', logo: '/wallets/okx.png', bg: 'bg-gradient-to-r from-gray-800/20 to-[#0b0c10]' },
        { name: 'Zerion', logo: '/wallets/zerion.png', bg: 'bg-gradient-to-r from-blue-400/20 to-[#0b0c10]' },
        { name: 'Rabby', logo: '/wallets/rabby.png', bg: 'bg-gradient-to-r from-pink-500/20 to-[#0b0c10]' },
        { name: 'Taho', logo: '/wallets/taho.png', bg: 'bg-gradient-to-r from-purple-600/20 to-[#0b0c10]' }
      ],
      Solana: [
        { name: 'Phantom', logo: '/wallets/phantom.png', bg: 'bg-gradient-to-r from-purple-700/20 to-[#0b0c10]' },
        { name: 'Solflare', logo: '/wallets/solflare.png', bg: 'bg-gradient-to-r from-orange-500/20 to-[#0b0c10]' }
      ],
      Sei: [
        { name: 'Compass', logo: '/wallets/sei.png', bg: 'bg-gradient-to-r from-gray-700/20 to-[#0b0c10]' },
        { name: 'Fin Wallet', logo: '/wallets/sei.png', bg: 'bg-gradient-to-r from-gray-700/20 to-[#0b0c10]' }
      ],
      More: [
        { name: 'Keplr', logo: '/wallets/keplr.png', bg: 'bg-gradient-to-r from-indigo-600/20 to-[#0b0c10]' },
        { name: 'XDEFI', logo: '/wallets/xdefi.png', bg: 'bg-gradient-to-r from-gray-900/20 to-[#0b0c10]' },
        { name: 'Ledger', logo: '/wallets/ledger.png', bg: 'bg-gradient-to-r from-slate-800/20 to-[#0b0c10]' }
      ]
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 max-h-[320px] overflow-y-auto pr-1 no-scrollbar">
        {wallets[selectedNetwork].map((wallet, index) => (
          <button
            key={index}
            className={`flex items-center justify-between px-4 py-2.5 border border-white/10 hover:bg-white/10 transition text-left rounded-md ${wallet.bg}`}
          >
            <div className="flex items-center gap-3">
              <Image src={wallet.logo} alt={wallet.name} width={24} height={24} className="rounded bg-white p-0.5" />
              <span className="text-sm font-medium text-white">{wallet.name}</span>
            </div>
            <span className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded">Installed</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-6 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <Dialog.Panel className="w-full max-w-5xl bg-[#0b0c10] border border-white/10 p-10 text-white shadow-2xl relative rounded-lg">
              <button onClick={onClose} className="absolute top-6 right-6 text-white/60 hover:text-white">
                <FaTimes size={20} />
              </button>

              <div className="mb-8">
                <Dialog.Title className="text-3xl font-bold mb-2 text-left">Log in to Actora</Dialog.Title>
                <p className="text-sm text-white/60 text-left">
                  By logging in, you agree to our Terms of Service and Privacy Policy. Connect your wallet or social account to continue.
                </p>
              </div>

              <div className="flex items-center space-x-4 overflow-x-auto pb-1">
                {['EVM', 'Solana', 'Sei', 'More'].map((label) => (
                  <button
                    key={label}
                    onClick={() => setSelectedNetwork(label as any)}
                    className={`flex items-center gap-2 px-5 py-2 text-sm font-medium border min-w-[100px] text-center rounded-md whitespace-nowrap transition-all ${
                      selectedNetwork === label ? 'bg-white text-black border-white' : 'bg-[#1a1a1a] border-white/20 text-white/60'
                    }`}
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {renderWalletOptions()}

              <div className="border-t border-white/10 mt-8 pt-6">
                <p className="text-xs text-white/40 mb-4 text-center">Or sign in with:</p>
                <div className="flex justify-center gap-6">
                  {[RiTwitterXFill, FaDiscord, FaEnvelope, FaTelegramPlane].map((Icon, idx) => (
                    <div key={idx} className="w-14 h-14 bg-white/5 hover:bg-white/10 transition flex items-center justify-center rounded-full">
                      <Icon size={24} className="text-white/70" />
                    </div>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
