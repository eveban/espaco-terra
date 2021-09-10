import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.14:3336',
  // baseURL: 'https://backend.pitstopcabines.com.br',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzEyNzU0OTcsImV4cCI6MTYzMTM2MTg5Nywic3ViIjoiMSJ9.9vEiZ6ZX_WgwNdJ8_3azPJkaZ0yk0oKqi9CdPuePalI',
  },
});

export default api;
