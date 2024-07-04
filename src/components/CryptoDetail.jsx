import React, { useState, useEffect } from 'react';
import { fetchCoinDetail } from '../api';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoDetail = ({ coinId }) => {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCoinDetail = async () => {
      try {
        const data = await fetchCoinDetail(coinId);
        setCoinData(data);
      } catch (error) {
        setError('Failed to fetch coin details');
      } finally {
        setLoading(false);
      }
    };
    getCoinDetail();
  }, [coinId]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  if (!coinData) {
    return <div className="text-center text-xl text-red-500">No data available</div>;
  }

  const chartData = {
    labels: coinData.market_data.price_change_percentage_24h_in_currency
      ? Object.keys(coinData.market_data.price_change_percentage_24h_in_currency)
      : [],
    datasets: [
      {
        label: 'Price Change (%)',
        data: coinData.market_data.price_change_percentage_24h_in_currency
          ? Object.values(coinData.market_data.price_change_percentage_24h_in_currency)
          : [],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{coinData.name}</h2>
      <div className="chart-container mb-4">
        <Line data={chartData} />
      </div>
      <p>{coinData.description?.en || 'No description available'}</p>
    </div>
  );
};

export default CryptoDetail;
