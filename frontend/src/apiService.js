// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your actual backend URL

export const getCars = async () => {
  try {
    const response = await axios.get(`${API_URL}/cars`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
