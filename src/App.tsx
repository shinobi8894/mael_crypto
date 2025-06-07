// src/App.tsx
import React, { useState } from 'react';
import WalletConnect from './walletConnect';
import FundList from './fundList';

const App: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [balance, setBalance] = useState<string>('');

    const handleInvest = (fundName: string) => {
        alert(`Simulating investment in ${fundName}...`);
        // Simulate a success or failure
        const success = Math.random() > 0.5; // Random success/failure
        alert(success ? 'Investment successful!' : 'Investment failed.');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Crypto Investment App</h1>
            <WalletConnect setWalletAddress={setWalletAddress} setBalance={setBalance} />
            {walletAddress && (
                <div className="mt-4">
                    <p>Connected Wallet: {walletAddress}</p>
                    <p>ETH Balance: {balance} ETH</p>
                </div>
            )}
            <FundList onInvest={handleInvest} />
        </div>
    );
};

export default App;
