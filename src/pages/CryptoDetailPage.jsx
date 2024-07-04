import React from 'react';
import { useParams } from 'react-router-dom';
import CryptoDetail from '../components/CryptoDetail';

const CryptoDetailPage = () => {
  const { coinId } = useParams();
  return (
    <div className="p-4">
      <CryptoDetail coinId={coinId} />
    </div>
  );
};

export default CryptoDetailPage;
