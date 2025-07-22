'use client';


import { motion } from 'framer-motion';
import Header2 from './header.jsx';


export default function Globe3D() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0613] pt-32 pb-10 font-light text-white antialiased md:pt-20 md:pb-16"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
      <Header2/>
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

      <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
             SECURE. PRIVATE. DECENTRALIZED.
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Take Full Control of Your{' '}
            <span className="text-[#9b87f5]">Crypto Assets</span> 
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            Say goodbye to centralized exchanges. Our non-custodial wallet lets you store, send, and trade crypto with total freedom — your keys, your rules.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <a
              href="/create"
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 sm:w-auto"
            >
              Get Started
            </a>
            <a
  href="https://www.forbes.com/advisor/in/investing/cryptocurrency/what-is-a-crypto-exchange/"
  target="_blank"
  className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
>
  
  <span>Learn How it works</span>
  <svg
    xmlns="https://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
           
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="relative flex h-40 w-full overflow-hidden md:h-64">
            <img
              src="https://blocks.mvp-subha.me/assets/earth.png"
              alt="Earth"
              width={1000}
              height={400}
              className="absolute top-0 left-1/2 -z-10 mx-auto -translate-x-1/2 px-4 opacity-80"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)]">
            <img
              src="/image.png"
              alt="Lunexa Dashboard"
              width={1920}
              height={1080}
              className="h-auto w-full rounded-lg border border-white/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}