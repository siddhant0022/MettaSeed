'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const cn = (...classes) => classes.filter(Boolean).join(' ');
import { MinusIcon, PlusIcon } from 'lucide-react';



const faqItems = [
  {
    id: '1',
    question: 'What is a seed phrase?',
    answer:
      'A seed phrase is a 12-word secret key used to create and recover your wallet. It’s the only way to access your account if you forget your password or lose your device. Keep it safe and never share it.',
    category: 'general',
  },
  {
    id: '2',
    question: 'How do I create a new wallet?',
    answer:
      'To create a wallet, click "Create Wallet". You’ll receive a unique 12-word seed phrase. Copy and store it securely — it’s your account recovery key.',
    category: 'general',
  },
  {
    id: '3',
    question: 'Can I import an existing wallet?',
    answer:
      'Yes. Click "Import Wallet" and enter your existing 12-word seed phrase to regain access to your previous crypto wallet.',
    category: 'technical',
  },
  {
    id: '4',
    question: 'Which cryptocurrencies are supported?',
    answer:
      'Our wallet currently supports Ethereum (ETH), Bitcoin (BTC), and Solana (SOL). More blockchain integrations are coming soon.',
    category: 'technical',
  },
  {
    id: '5',
    question: 'Can I send and receive crypto?',
    answer:
      'Yes! You can easily send and receive ETH, BTC, and SOL from within the wallet. Each transaction is recorded securely on the blockchain.',
    category: 'technical',
  },
  {
    id: '6',
    question: 'How can I check my wallet balance?',
    answer:
      'Your dashboard shows live balances for all supported tokens across Ethereum, Bitcoin, and Solana networks.',
    category: 'technical',
  },
  {
    id: '7',
    question: 'Is my wallet secure?',
    answer:
      'Your private keys are encrypted and stored locally on your device. We never store your seed phrase or private information on any server.',
    category: 'support',
  },
  {
    id: '8',
    question: 'What if I lose my seed phrase?',
    answer:
      'Unfortunately, if you lose your seed phrase, you will not be able to recover your wallet. We strongly recommend storing it offline in a safe location.',
    category: 'support',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'technical', label: 'Technical' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'support', label: 'Support' },
];
    export default function Faq2() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      className="pt-20 pb-8"
      id="faq"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="mb-12 flex flex-col items-center">
          <span className="border-[#9b87f5] text-[#9b87f5] mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#120a23] rounded-full border">
            FAQs
          </span>
          <h2 className="mb-6 text-center text-2xl sm:mb-2.5 md:text-[2rem] text-gray-200 font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl text-center">
            Find answers to common questions about MVPBlocks and how to use our components to build your next project.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-[#9b87f5] text-gray-900'
                  : 'bg-[#120a23] text-gray-200 border border-[#9b87f5]/30 hover:bg-[#1a1233]',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
                'bg-[#120a23] border border-[#9b87f5]/30',
                expandedId === faq.id ? 'shadow-3xl' : '',
              )}
              style={{ minHeight: '88px' }}
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="flex w-full items-center justify-between p-4 text-left"
                type="button"
              >
                <h3 className="text-gray-200 text-lg font-semibold">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {expandedId === faq.id ? (
                    <MinusIcon className="text-[#9b87f5] h-5 w-5" />
                  ) : (
                    <PlusIcon className="text-[#9b87f5] h-5 w-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                  
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#9b87f5]/20 px-4 pt-2 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
             </motion.div>
          ))}
              </AnimatePresence>
        </div>
          
      
          

              {/* Decorative elements */}
              <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
            

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="#"
            className="border-[#9b87f5] text-gray-200 hover:bg-[#9b87f5] hover:text-gray-900 inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 font-semibold transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}