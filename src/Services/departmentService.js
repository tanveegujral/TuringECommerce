import axiosInstance from '../helpers/axiosInstance';

export default {
	getDepartments: () => axiosInstance.get('/departments')
};
