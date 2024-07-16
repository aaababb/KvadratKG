import { createSlice } from '@reduxjs/toolkit';
import { postHeadings } from './action';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postHeadings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postHeadings.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postHeadings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Не удалось добавить пользователя';
      });
  },
});

export default userSlice.reducer;