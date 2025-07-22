'use client';

export default function FooterGlow() {
  return (
    <footer
      className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#9b87f5]/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-[#9b87f5]/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto flex max-w-[1120px] flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12 bg-[#120a23] ring-1 ring-[#9b87f5]/30">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#9b87f5] to-[#6c5dd3] text-2xl font-extrabold text-white shadow-md">
              {/* Lightning or crypto icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <span className="bg-gradient-to-br from-[#bca8ff] to-[#9b87f5] bg-clip-text text-xl font-bold tracking-tight text-transparent">
              MetaSeed
            </span>
          </a>
          <p className="text-gray-200 mb-6 max-w-xs text-center text-sm md:text-left">
            MetaSeed is a self-custodial crypto wallet helping users securely store, send, receive, and track assets across Ethereum, Bitcoin, and Solana.
          </p>
          <div className="mt-2 flex gap-3 text-[#9b87f5]">
            {/* Social links */}
            <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition">
              {/* Twitter */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.176..."></path>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-200 transition">
              {/* GitHub */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .29a12 12 0 00-3.797..."></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition">
              {/* LinkedIn */}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0..."></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-[#9b87f5] uppercase">Wallet</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Create Wallet</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Import Wallet</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Send / Receive</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Track Balance</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-[#9b87f5] uppercase">Security</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Seed Phrase</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Recovery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Private Key</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-[#9b87f5] uppercase">Support</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Docs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gray-200 transition">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Footer bottom */}
      <div className="text-muted-foreground relative z-10 mt-10 text-center text-xs">
        <span>&copy; 2025    MetaSeed . Your keys, your crypto.</span>
      </div>
    </footer>
  );
}
