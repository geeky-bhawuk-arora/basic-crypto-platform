import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Pandey Crypto</h1>
        <p className="text-gray-600 mt-2">Your trusted platform for cryptocurrencies</p>
      </header>

      <main className="text-center">
        <p className="text-lg text-gray-800 mb-6">
          Welcome to Pandey Crypto! Explore the exciting world of cryptocurrencies and stay informed.
        </p>
        <Link
          to="/cryptos"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          View All Cryptocurrencies
        </Link>
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        <p>© 2024 Pandey Crypto. All rights reserved.</p>
        <p>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>{' '}
          |{' '}
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
