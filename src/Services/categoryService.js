import axiosInstance from '../helpers/axiosInstance';

export default {
	getCategories: () => axiosInstance.get('/categories')
};
