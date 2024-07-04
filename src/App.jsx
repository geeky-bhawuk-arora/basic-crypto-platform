import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllCryptos from './pages/AllCryptos';
import CryptoDetailPage from './pages/CryptoDetailPage';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptos" element={<AllCryptos />} />
          <Route path="/crypto/:coinId" element={<CryptoDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
