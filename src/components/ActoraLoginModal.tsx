'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { FaDiscord, FaTelegramPlane, FaEnvelope, FaTimes } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import detectEthereumProvider from '@metamask/detect-provider'

export default function ActoraLoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedNetwork, setSelectedNetwork] = useState<'EVM' | 'Solana' | 'Sei' | 'More'>('EVM')
  const [installedWallets, setInstalledWallets] = useState<string[]>([])

  useEffect(() => {
    async function detectWallets() {
      const installed: string[] = []
      const provider = await detectEthereumProvider()
      if (provider) installed.push('MetaMask')
      if ((window as any).coinbaseWalletExtension) installed.push('Coinbase Wallet')
      if ((window as any).BinanceChain) installed.push('Binance Wallet')
      setInstalledWallets(installed)
    }
    detectWallets()
  }, [])

  const wallets: Record<string, { name: string; logo: string; bg?: string }[]> = {
    EVM: [
      { name: 'MetaMask', logo: '/wallets/metamask.png', bg: 'bg-gradient-to-r from-orange-400/10 to-[#0b0c10]' },
      { name: 'Coinbase Wallet', logo: '/wallets/CoinBase.png', bg: 'bg-gradient-to-r from-blue-500/10 to-[#0b0c10]' },
      { name: 'Binance Wallet', logo: '/wallets/bnb.svg', bg: 'bg-gradient-to-r from-yellow-400/10 to-[#0b0c10]' },
      { name: 'OKX', logo: '/wallets/OKX.svg', bg: 'bg-gradient-to-r from-gray-800/10 to-[#0b0c10]' },
      { name: 'Zerion', logo: '/wallets/Zerion.png', bg: 'bg-gradient-to-r from-blue-400/10 to-[#0b0c10]' },
      { name: 'Rabby', logo: '/wallets/rabby.svg', bg: 'bg-gradient-to-r from-blue-500/10 to-[#0b0c10]' },
      { name: 'Trust Wallet', logo: '/wallets/Trust.png', bg: 'bg-gradient-to-r from-blue-500/10 to-[#0b0c10]' }
    ],
    Solana: [
      { name: 'Phantom', logo: '/wallets/phantom.png', bg: 'bg-gradient-to-r from-purple-700/10 to-[#0b0c10]' },
      { name: 'Solflare', logo: '/wallets/solflare.svg', bg: 'bg-gradient-to-r from-orange-500/10 to-[#0b0c10]' },
      { name: 'Backpack', logo: '/wallets/backpack.svg', bg: 'bg-gradient-to-r from-red-500/10 to-[#0b0c10]' }
    ],
    Sei: [
      { name: 'Wallet Connect', logo: '/wallets/WalletConnect.png', bg: 'bg-gradient-to-r from-blue-700/10 to-[#0b0c10]' },
    ],
    More: [
      { name: 'Keplr', logo: '/wallets/keplr.png', bg: 'bg-gradient-to-r from-indigo-600/10 to-[#0b0c10]' },
      { name: 'Sui', logo: '/wallets/sui.svg', bg: 'bg-gradient-to-r from-blue-900/10 to-[#0b0c10]' },
      { name: 'Ton', logo: '/wallets/ton.svg', bg: 'bg-gradient-to-r from-blue-800/10 to-[#0b0c10]' },
      { name: 'Aptos', logo: '/wallets/aptos.svg', bg: 'bg-gradient-to-r from-gray-800/10 to-[#0b0c10]' }
    ]
  }

  const renderWalletOptions = () => (
    <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-3 mt-4 max-h-[320px] overflow-y-auto pr-1 no-scrollbar">
      {(wallets[selectedNetwork] || []).map((wallet, index) => (
        <button
          key={index}
          className={`cursor-pointer flex items-center justify-between w-full h-[60px] px-4 py-2 border border-white/10 hover:bg-white/10 transition text-left rounded-md ${wallet.bg} gap-2`}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <Image
              src={wallet.logo}
              alt={wallet.name}
              width={32}
              height={32}
              className="rounded flex-shrink-0"
            />
            <span className="text-sm font-medium text-white truncate max-w-[150px]">{wallet.name}</span>
          </div>
          <span className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded whitespace-nowrap flex-shrink-0">
            {installedWallets.includes(wallet.name) ? 'Installed' : 'Connect'}
          </span>
        </button>
      ))}
    </div>
  )

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

        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <Dialog.Panel className="w-full max-w-6xl bg-[#0b0c10] border border-white/10 p-6 sm:p-10 text-white shadow-2xl relative rounded-lg">
              <button onClick={onClose} className="absolute top-6 right-6 text-white/60 hover:text-white">
                <FaTimes size={20} />
              </button>

              <div className="mb-8">
                <Dialog.Title className="text-2xl sm:text-3xl font-bold mb-2 text-left">Log in to Actora</Dialog.Title>
                <p className="text-sm text-white/60 text-left max-w-2xl">
                    By logging in, you agree to our{' '}
                    <span className="text-purple-400 hover:underline cursor-pointer">Terms of Service</span> and{' '}
                    <span className="text-purple-400 hover:underline cursor-pointer">Privacy Policy</span>. Connect your wallet or social account to continue.
                </p>
              </div>

              <div className="flex flex-nowrap gap-3 overflow-x-auto pb-1 scrollbar-hide">
                {['EVM', 'Solana', 'Sei', 'More'].map((label) => {
                  const isMore = label === 'More'

                  return (
                    <button
                      key={label}
                      onClick={() => setSelectedNetwork(label as any)}
                      className={`cursor-pointer flex ${
                        isMore ? 'justify-center' : 'items-center gap-2'
                      } px-5 py-2 text-sm font-medium border min-w-[100px] text-center rounded-md whitespace-nowrap transition-all ${
                        selectedNetwork === label
                          ? 'bg-white text-black border-white'
                          : 'bg-[#1a1a1a] border-white/20 text-white/60'
                      }`}
                    >
                      {!isMore && (
                        <Image
                          src={`/wallets/${label.toLowerCase()}.png`}
                          alt={label}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      )}
                      <span>{label}</span>
                    </button>
                  )
                })}
              </div>

              {renderWalletOptions()}

              <div className="border-t border-white/10 mt-8 pt-6">
                <div className="flex justify-center gap-6 flex-wrap">
                  {[RiTwitterXFill, FaDiscord, FaEnvelope, FaTelegramPlane].map((Icon, idx) => (
                    <div key={idx} className="w-12 h-12 bg-white/5 hover:bg-white/10 transition flex items-center justify-center rounded-full">
                      <Icon size={28} className="text-white/70" />
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
