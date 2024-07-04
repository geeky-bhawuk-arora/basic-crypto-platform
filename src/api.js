import axios from 'axios';

export const fetchTrendingCoins = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
  return response.data.coins;
};

export const fetchCoinDetail = async (coinId) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  return response.data;
};
