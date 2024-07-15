import axiosInstance from './api';

export const getDetailMovie = async (slug: string|undefined) => {
    try {
      const response = await axiosInstance.get(`/phim/${slug}`);
      return response.data;
    } catch (error) {
      throw error;
    }
};