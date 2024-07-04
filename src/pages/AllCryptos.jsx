import React, { useState, useEffect } from 'react';
import { fetchTrendingCoins } from '../api';
import SearchBar from '../components/SearchBar';
import CryptoList from '../components/CryptoList';

const AllCryptos = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getTrendingCoins = async () => {
      try {
        const data = await fetchTrendingCoins();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };
    getTrendingCoins();
  }, []);

  const filteredCoins = coins.filter(coin => coin.item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CryptoList coins={filteredCoins} />
    </div>
  );
};

export default AllCryptos;
