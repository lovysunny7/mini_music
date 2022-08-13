import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  // initialState,
  reducers: {},
});

export default postSlice.reducer;
export const postActions = postSlice.actions;