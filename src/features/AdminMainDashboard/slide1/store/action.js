import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const postHeadings = createAsyncThunk(
  'user/postHeadings',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.postHeading(formData);
      return response.data; // Возвращаем только данные
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : 'Ошибка сервера');
    }
  }
);

export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
