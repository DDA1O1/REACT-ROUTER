const BASE_URL = 'https://www.omdbapi.com';
const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/?i=${id}&apikey=${API_KEY}`);
  return await response.json();
};
