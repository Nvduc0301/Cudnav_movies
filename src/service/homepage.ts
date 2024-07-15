import { error } from 'console';
import axiosInstance from './api';

export const getSingleMovies = async () => {
  try {
    const response = await axiosInstance.get('v1/api/danh-sach/phim-le');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getSeries = async () => {
  try {
    const response = await axiosInstance.get('v1/api/danh-sach/phim-bo');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getAnimations = async () => {
  try {
    const response = await axiosInstance.get('v1/api/danh-sach/hoat-hinh');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getTvShows = async () => {
  try {
    const response = await axiosInstance.get('v1/api/danh-sach/tv-shows');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getNewUpdate = async () => {
  try {
    const response = await axiosInstance.get('danh-sach/phim-moi-cap-nhat');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieList = async (type: string, page: number) => {
  try {
    const response = await axiosInstance.get(`v1/api/danh-sach/${type}?page=${page}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};



