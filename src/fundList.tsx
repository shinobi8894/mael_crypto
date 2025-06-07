// src/FundList.tsx
import React from 'react';

interface Fund {
    name: string;
    description: string;
    performance: string;
}

const funds: Fund[] = [
    { name: 'BTC Fund', description: 'Invest in Bitcoin', performance: '+12.5%' },
    { name: 'AI Fund', description: 'Invest in AI technologies', performance: '+8.3%' },
    { name: 'DeFi Fund', description: 'Invest in DeFi projects', performance: '+15.1%' },
];

interface FundListProps {
    onInvest: (fundName: string) => void;
}

const FundList: React.FC<FundListProps> = ({ onInvest }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {funds.map((fund, index) => (
                <div key={index} className="border p-4 rounded shadow">
                    <h2 className="font-bold">{fund.name}</h2>
                    <p>{fund.description}</p>
                    <p className="text-green-500">{fund.performance}</p>
                    <button onClick={() => onInvest(fund.name)} className="bg-green-500 text-white p-2 rounded">
                        Invest
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FundList;
