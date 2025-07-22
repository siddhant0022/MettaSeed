import React, { useState } from 'react';
import * as blockchain from '../services/blockchain';
import { Connection } from '@solana/web3.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function AssetCard({ coin, balance, onTransactionSuccess }) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (!coin) return null;

  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);
    setMessage('');
    setError('');
    try {
      if (coin.symbol === 'ETH' || coin.symbol === 'BTC') {
        const txHash = coin.symbol === 'ETH'
          ? await blockchain.sendEth(coin.privateKey, recipient, amount)
          : await blockchain.sendBtc(coin.privateKey, recipient, parseFloat(amount));
        setMessage(`Success! Tx: ${txHash.substring(0, 10)}...`);
        resetFormAndRefresh();
      } else if (coin.symbol === 'SOL') {
        const signature = await blockchain.sendSol(coin.privateKey, recipient, parseFloat(amount));
        setMessage('Transaction sent! Confirming...');
        await pollForSolanaConfirmation(signature);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
      setSending(false);
    }
  };

  const pollForSolanaConfirmation = async (signature) => {
    const solscanLink = `https://solscan.io/tx/${signature}`;
    const connection = new Connection(blockchain.SOL_RPC_URL);
    let confirmed = false;
    for (let i = 0; i < 30; i++) {
      const status = await connection.getSignatureStatus(signature, { searchTransactionHistory: true });
      if (status && status.value && (status.value.confirmationStatus === 'confirmed' || status.value.confirmationStatus === 'finalized')) {
        setMessage(
          <span>
            Success! <a href={solscanLink} target="_blank" rel="noopener noreferrer" className="link link-primary">View on Solscan</a>
          </span>
        );
        confirmed = true;
        resetFormAndRefresh();
        break;
      }
      await sleep(2000);
    }
    if (!confirmed) {
      setError(
        <span>
          Confirmation timed out. <a href={solscanLink} target="_blank" rel="noopener noreferrer" className="link link-error">Check Solscan</a>
        </span>
      );
      setSending(false);
    }
  };

  const resetFormAndRefresh = () => {
    setRecipient('');
    setAmount('');
    setSending(false);
    if (onTransactionSuccess) onTransactionSuccess();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Address copied!');
  };

  const getCoinIcon = (symbol) => {
    switch (symbol) {
      case 'ETH':
        return (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#18122B" />
            <path d="M18 5L18.2 5.6V23.7L18 23.9L17.8 23.7V5.6L18 5Z" fill="#9b87f5"/>
            <path d="M18 5L27.5 18.1L18 23.9V5Z" fill="#BFAAFF"/>
            <path d="M18 5L8.5 18.1L18 23.9V5Z" fill="#7C5FEA"/>
            <path d="M18 25.2L18.1 25.4V30.2L18 30.5L17.9 30.2V25.4L18 25.2Z" fill="#9b87f5"/>
            <path d="M18 30.5L27.5 20.1L18 25.2V30.5Z" fill="#BFAAFF"/>
            <path d="M18 30.5L8.5 20.1L18 25.2V30.5Z" fill="#7C5FEA"/>
          </svg>
        );
      case 'SOL':
        return (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#18122B" />
            <defs>
              <linearGradient id="solana-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9b87f5"/>
                <stop offset="1" stopColor="#00FFA3"/>
              </linearGradient>
            </defs>
            <rect x="10" y="11" width="16" height="3" rx="1.5" fill="url(#solana-gradient)"/>
            <rect x="10" y="16.5" width="16" height="3" rx="1.5" fill="url(#solana-gradient)" opacity="0.7"/>
            <rect x="10" y="22" width="16" height="3" rx="1.5" fill="url(#solana-gradient)" opacity="0.5"/>
          </svg>
        );
      case 'BTC':
        return (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#18122B" />
            <path d="M18 8C22.4183 8 26 11.5817 26 16C26 20.4183 22.4183 24 18 24C13.5817 24 10 20.4183 10 16C10 11.5817 13.5817 8 18 8Z" fill="#F7931A"/>
            <text x="18" y="21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">฿</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative rounded-3xl border border-[#9b87f5]/30 bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#9b87f5]/40 p-8 text-white flex flex-col min-h-[480px] items-center animate-fadein">
      {getCoinIcon(coin.symbol)}
      <h2 className="text-2xl font-bold mb-1 text-[#9b87f5] tracking-wide">{coin.name} <span className="text-base text-white/70 font-normal">({coin.symbol})</span></h2>
      <p className="text-4xl font-extrabold my-2 tracking-tight">
        {balance === null ? <span className="animate-pulse text-white/40">...</span> : `${parseFloat(balance).toFixed(6)}`}
        <span className="text-lg text-white/50 ml-2">{coin.symbol}</span>
      </p>
      <div className="mb-4 w-full">
        <label className="block text-xs text-white/60 mb-1">Your Address</label>
        <div className="flex items-center gap-2 w-full">
          <input type="text" readOnly value={coin.address} className="flex-1 rounded-lg bg-white/10 border border-white/10 px-2 py-1 text-xs text-white truncate focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition" />
          <button onClick={() => copyToClipboard(coin.address)} className="rounded-full px-3 py-1 bg-gradient-to-r from-[#9b87f5] to-[#7C5FEA] hover:from-[#7C5FEA] hover:to-[#9b87f5] text-xs font-semibold shadow-md transition">Copy</button>
        </div>
      </div>
      <div className="border-t border-white/10 my-3 w-full" />
      <form onSubmit={handleSend} className="flex flex-col gap-2 flex-1 justify-between w-full">
        <div>
          <label className="block text-xs text-white/60 mb-1">Recipient Address</label>
          <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} required placeholder="Address" className="rounded-lg bg-white/10 border border-white/10 px-2 py-1 text-xs text-white w-full focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition" />
        </div>
        <div>
          <label className="block text-xs text-white/60 mb-1">Amount</label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="0.0" className="rounded-lg bg-white/10 border border-white/10 px-2 py-1 text-xs text-white w-full focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition" />
        </div>
        <button type="submit" disabled={sending || !recipient || !amount} className="rounded-full bg-gradient-to-r from-[#9b87f5] to-[#7C5FEA] hover:from-[#7C5FEA] hover:to-[#9b87f5] text-white font-bold py-2 mt-2 shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-lg tracking-wide">
          {sending ? <span className="animate-spin mr-2">⏳</span> : null}
          Send {coin.symbol}
        </button>
      </form>
      {message && <div role="alert" className="mt-3 rounded bg-green-600/80 text-white text-xs px-3 py-2 w-full text-center">{message}</div>}
      {error && <div role="alert" className="mt-3 rounded bg-red-600/80 text-white text-xs px-3 py-2 w-full text-center">{error}</div>}
    </div>
  );
}

export default AssetCard;
