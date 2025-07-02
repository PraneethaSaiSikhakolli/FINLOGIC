import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update later if deployed
  headers: {
    'Content-Type': 'application/json'
  }
});