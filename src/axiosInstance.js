const axios = require('axios');

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3500' // Your Express server's base URL
});

module.exports = axiosInstance;
