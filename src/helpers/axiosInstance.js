import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://backendapi.turing.com',
	withCredentials: false
});

export default axiosInstance;
