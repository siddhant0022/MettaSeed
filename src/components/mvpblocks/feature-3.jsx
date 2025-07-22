import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
} from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');
// Or replace with clsx or template strings

const leftFeatures = [
  {
    icon: Building2,
    title: 'Non-Custodial Wallet',
    description:
      'You own your private keys. Only you can access your funds — no third-party control.',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: User2,
    title: 'Privacy First',
    description:
      'No KYC, no tracking. Your data stays on your device, always encrypted and safe.',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Trophy,
    title: 'Reward-Ready',
    description:
      'Earn with staking, DeFi, or future airdrops — built right into the wallet.',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures = [
  {
    icon: ScreenShare,
    title: 'Cross-Chain Compatible',
    description:
      'Easily manage multiple blockchains like Ethereum, BNB, and Polygon — all in one wallet.',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: User,
    title: 'Seamless dApp Access',
    description:
      'Use Web3 dApps, trade on DEXs, and sign smart contracts — straight from your wallet.',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Lightbulb,
    title: 'Secure Backup & Recovery',
    description:
      'Protect your wallet with encrypted recovery phrases and secure local backups.',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
          'bg-[#120a23] ring-border ring border-[#9b87f5]/30',
          feature.cornerStyle
        )}
      >
        <div className="mb-3 text-[2rem] flex items-center justify-center">
          <Icon className="text-[#9b87f5]" />
        </div>
        <h2 className="mb-2.5 text-2xl font-semibold text-gray-200 text-center">
          {feature.title}
        </h2>
        <p className="text-muted-foreground text-base text-pretty text-center">
          {feature.description}
        </p>
        <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function Feature3() {
  return (
    <section
      className="pt-20 pb-8"
      id="features"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="bg-[#120a23] text-gray-200 ring-border relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring font-semibold">
              <span className="relative z-1 flex items-center gap-2">
                Features
              </span>
              <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="mb-2 text-center text-2xl sm:mb-2.5 md:text-[2rem] text-gray-200 font-bold">
              Why Choose Our Crypto Wallet?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[18rem] text-center text-pretty">
              From multi-chain support to bulletproof security, discover why our
              decentralized wallet gives you true control over your digital
              assets.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
