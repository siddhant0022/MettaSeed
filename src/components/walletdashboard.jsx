"use client"

import React, { useEffect, useState, useCallback } from 'react';
import { useWallet } from '../context/walletContext'
import AssetCard from './assetcards'
import { getEthBalance, getSolBalance, getBtcBalance } from '../services/blockchain';

function WalletDashboard() {
    const { wallet, logout } = useWallet();
    const [balances, setBalances] = useState({ eth: null, sol: null, btc: null });

    const fetchBalances = useCallback(async () => {
  
        if (!wallet || !wallet.ethereum || !wallet.bitcoin || !wallet.solana) return;
 
        try {
            console.log("Refreshing balances...");  
            const [eth, sol, btc] = await Promise.all([ 
                getEthBalance(wallet.ethereum.address),  
                getSolBalance(wallet.solana.address),   
                getBtcBalance(wallet.bitcoin.address)
            ]);
                //@ts-expect-error setBalances is dynamically typed
            setBalances({ eth, sol, btc });
        } catch (error) {
            console.error("Failed to fetch all balances:", error);
        }
    }, [wallet]);

    useEffect(() => {
        fetchBalances();
        const interval = setInterval(fetchBalances, 30000);
        return () => clearInterval(interval);
    }, [fetchBalances]);

    if (!wallet || !wallet.ethereum || !wallet.bitcoin || !wallet.solana) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold text-red-600">Wallet Data Error</h2>
                <p className="my-4">There was a problem loading your wallet data. Please try logging out and importing your wallet again.</p>
                <button onClick={logout} className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
                    Logout
                </button>
            </div>
        );
    }

    // This code will now only run if the wallet object is valid.

    const coins = [                                              
        { name: 'Ethereum', symbol: 'ETH', ...wallet.ethereum }, 
        { name: 'Solana', symbol: 'SOL', ...wallet.solana },     
        { name: 'Bitcoin', symbol: 'BTC', ...wallet.bitcoin },
    ];

    return (
        <div className="relative z-10 container mx-auto max-w-5xl px-4 py-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md">
            <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-3xl font-light text-white">Wallet Dashboard</h2>
                <button onClick={logout} className="rounded-lg bg-[#9b87f5]/80 hover:bg-[#9b87f5] text-white font-semibold py-2 px-6 transition">Logout & Lock</button>
            </header>
            <div className="bg-yellow-100/80 border border-yellow-400 text-yellow-900 px-4 py-3 rounded-lg mb-8">
                <p className="font-bold">Your Mnemonic Phrase (Keep it secret!)</p>
                <p className="font-mono text-sm break-words">{wallet.mnemonic}</p>    
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coins.map(coin => (
                    <AssetCard
                        key={coin.symbol}
                        coin={coin}
                        //@ts-expect-error balance is dynamically typed
                        balance={balances[coin.symbol.toLowerCase()]}
                        onTransactionSuccess={fetchBalances}
                    />
                ))}
            </div>
        </div>
    );
}

export default WalletDashboard;