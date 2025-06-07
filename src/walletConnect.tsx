// src/WalletConnect.tsx
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface WalletConnectProps {
    setWalletAddress: (address: string) => void;
    setBalance: (balance: string) => void;
}


declare global {
  interface Window{
    ethereum?:any
  }
}

const WalletConnect: React.FC<WalletConnectProps> = ({ setWalletAddress, setBalance }) => {
    const [provider, setProvider] = useState<any>(null);

    async function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
          try {
            const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const walletAddress = await signer.getAddress();
            console.log("Wallet connected:", walletAddress);
            // Update your UI with the connected wallet address
            //  setWalletAddress(walletAddress); 
          } catch (error) {
            console.error("Error connecting wallet:", error);
            // Handle connection errors, e.g., display an error message
          }
        } else {
          console.log("Please install a wallet like MetaMask");
          // Display a message to the user to install a wallet
        }
      }

    useEffect(() => {
        if (provider) {
            provider.on("accountsChanged", (accounts: string[]) => {
                setWalletAddress(accounts[0]);
            });
            provider.on("networkChanged", () => {
                window.location.reload();
            });
        }
    }, [provider]);

    return (
        <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
            Connect Wallet
        </button>
    );
};

export default WalletConnect;
