import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Pandey Crypto</h1>
      <Link to="/cryptos" className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700">
        View All Cryptocurrencies
      </Link>
    </div>
  );
};

export default Home;
