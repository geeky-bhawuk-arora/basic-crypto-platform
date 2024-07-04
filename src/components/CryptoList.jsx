import React from 'react';
import { Link } from 'react-router-dom';

const CryptoList = ({ coins }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coins.map((coin) => (
        <Link to={`/crypto/${coin.item.id}`} key={coin.item.id} className="block p-4 border border-gray-300 rounded hover:shadow-lg">
          <div className="flex items-center">
            <img src={coin.item.large} alt={coin.item.name} className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-bold">{coin.item.name}</h3>
              <p className="text-gray-500">{coin.item.symbol}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CryptoList;
