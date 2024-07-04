import React from 'react';
import { useParams } from 'react-router-dom';
import CryptoDetail from '../components/CryptoDetail';

const CryptoDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <CryptoDetail coinId={id} />
    </div>
  );
};

export default CryptoDetailPage;
