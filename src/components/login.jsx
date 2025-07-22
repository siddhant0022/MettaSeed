"use client";
import React, { useState } from 'react';
import { generateMnemonic } from '../services/wallet';
import { useWallet } from '../context/walletContext';

function Login() {
    const [mnemonic, setMnemonic] = useState('');
    const [newMnemonic, setNewMnemonic] = useState('');
    const [error, setError] = useState('');
    const { importWallet, createWallet, loading } = useWallet();
     const { login } = useWallet();


  const handleImport = async (e) => {
        e.preventDefault();
        if (!mnemonic.trim() || mnemonic.trim().split(' ').length !== 12) {
            setError('Please enter a valid 12-word mnemonic phrase.');
            return;
        }
        try {
            setError('');
            await login(mnemonic.trim());
        } catch (err) {
            setError('Invalid mnemonic phrase. Please check and try again.');
        }
    };
        const handleCreate = () => setNewMnemonic(generateMnemonic());
        const proceedWithNewMnemonic = async () => await login(newMnemonic);
         if (newMnemonic) {
        
        return (
            <div className="max-w-md mx-auto mt-10 bg-base-200 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Save Your Secret Phrase</h2>
                <div className="bg-transparent border-l-4 border-[#9b87f5] text-gray-200 hover:bg-[#9b87f5] hover:text-gray-900 font-semibold transition-colors p-4 rounded-md mb-6">
                    <p className="font-bold">IMPORTANT!</p>
                    <p>Write this 12-word phrase down. It's the only way to recover your wallet.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center font-mono text-lg tracking-wider my-4">
                    {newMnemonic}
                </div>
                <button onClick={proceedWithNewMnemonic} className="w-full btn btn-primary mt-2">
                    I've Saved It, Continue
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h1 className="text-4xl font-bold text-center mb-4">Simple Crypto Wallet</h1>
            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Import Existing Wallet</h3>
                <p className="text-sm text-white/70 mb-4">
                    Enter your 12-word mnemonic phrase to restore your wallet.
                </p>
                <form onSubmit={handleImport}>
                    <textarea   
                        value={mnemonic}
                        onChange={(e) => setMnemonic(e.target.value)}
                        placeholder="Enter your 12-word mnemonic phrase..."
                        className="w-full p-3 border border-gray-600 rounded-lg bg-base-100 focus:ring-2 focus:ring-blue-500 transition"
                        rows={3}
                    />
                    <button type="submit" disabled={loading} className="mt-4 w-full btn btn-primary">
                        Import Wallet
                    </button>
                    {error && <p className="text-red-400 mt-2">{error}</p>}
                </form>
            </div>

            {/* Create Wallet Section */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Create New Wallet</h3>
                <p className="text-sm text-white/70 mb-4">
                    Don&apos;t have a wallet? Create a new one to get started.
                </p>
                <button onClick={handleCreate} disabled={loading} className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    {loading ? 'Creating...' : 'Create New Wallet'}
                </button>
            </div>
        </div>
    );
}

export default Login;