import axiosInstance from '../helpers/axiosInstance';

export default {
	getProducts: () => axiosInstance.get('/products')
};
