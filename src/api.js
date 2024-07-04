import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchTrendingCoins = async () => {
  const response = await axios.get(`${API_BASE_URL}/search/trending`);
  return response.data.coins;
};

export const fetchCoinDetail = async (coinId) => {
  const response = await axios.get(`${API_BASE_URL}/coins/${coinId}`);
  return response.data;
};
