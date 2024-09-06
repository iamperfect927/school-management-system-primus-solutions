import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:9000', // Replace with your FastAPI server URL
    timeout: 10000, // Optional: sets a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
