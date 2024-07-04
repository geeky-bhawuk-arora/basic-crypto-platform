import React from 'react';
import { Link } from 'react-router-dom';

const CryptoList = ({ coins }) => {
  return (
    <div>
      {coins.map((coin) => (
        <Link to={`/crypto/${coin.item.id}`} key={coin.item.id} className="block p-4 border-b border-gray-300">
          <div className="flex items-center">
            <img src={coin.item.large} alt={coin.item.name} className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-bold">{coin.item.name}</h3>
              <p>{coin.item.symbol}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CryptoList;
