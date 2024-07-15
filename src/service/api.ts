import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://phimapi.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers here
  },
});

axiosInstance.interceptors.request.use(
  function(config) {
    // Thực hiện các thao tác trước khi gửi yêu cầu như thêm tiêu đề, xử lý dữ liệu,...
    return config;
  },
  function(error) {
    // Xử lý lỗi nếu có khi gửi yêu cầu
    return Promise.reject(error);
  }
);

export default axiosInstance;