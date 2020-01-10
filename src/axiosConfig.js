import axios from 'axios';

const instance = axios.create({
  baseURL:'https://api.themoviedb.org/3'
});

export const imageBase = 'http://image.tmdb.org/t/p/';

export default instance;
