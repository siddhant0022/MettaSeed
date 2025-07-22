"use client";

import Header2 from '../components/headerforcreate';
import Login from '../components/login';

import WalletDashboard from '../components/walletdashboard';
import { useWallet } from '../context/walletContext';



function Create() {
  const { wallet, loading } = useWallet();

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl font-semibold">Loading Wallet...</div>
    </div>
  );

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0613] pt-32 pb-10 font-light text-white antialiased md:pt-20 md:pb-16"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
      <Header2/>

      {/* Decorative gradients */}
      <div
        className="absolute top-0 right-0 h-1/2 w-1/2"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)',
        }}
      />
      <div
        className="absolute top-0 left-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)',
        }}
      />

      <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-3xl">
        <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
          CREATE YOUR WALLET
        </span>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-light md:text-5xl lg:text-6xl">
          Your <span className="text-[#9b87f5]">Decentralized</span> Wallet
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
          Securely create, access, and manage your crypto assets. Your keys, your rules—no third parties.
        </p>
        <div className="min-h-[300px]">
          {loading ? <LoadingSpinner /> : wallet ? <WalletDashboard /> : <Login />}
        </div>
      </div>
    </section>
  );
}

export default Create;