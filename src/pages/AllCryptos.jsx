import React, { useState, useEffect } from 'react';
import { fetchTrendingCoins } from '../api';
import SearchBar from '../components/SearchBar';
import CryptoList from '../components/CryptoList';

const AllCryptos = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingCoins = async () => {
      try {
        const data = await fetchTrendingCoins();
        setCoins(data);
      } catch (error) {
        setError('Failed to fetch trending coins');
      } finally {
        setLoading(false);
      }
    };
    getTrendingCoins();
  }, []);

  const filteredCoins = coins.filter(coin => coin.item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CryptoList coins={filteredCoins} />
    </div>
  );
};

export default AllCryptos;
