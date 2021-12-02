import api from './api';

export default async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const createShortUrl = async (formData) => {
  try {
    const response = await api.post('/short_urls', formData);
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

